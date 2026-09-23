import { test, after } from "node:test";
import assert from "node:assert/strict";
import { createHmac, randomUUID } from "node:crypto";
import { issueChallenge, verifyChallenge, validateInput, readBody, validOrigin } from "../lib/leads/validation";
import { database } from "../lib/leads/db";
import { saveLead, enforceRateLimit } from "../lib/leads/store";
import { deliverPending, notificationMessage, recordDelivery, reconcileDelivery } from "../lib/leads/delivery";
import { POST as webhook } from "../app/api/webhooks/resend/route";
import { POST as legacyIntake } from "../app/api/lead/route";

process.env.LEAD_FORM_SECRET ||= "local-tests-only";
const namespace = `test-${randomUUID()}`;
process.env.LEAD_NAMESPACE = namespace;
const input = { name: "Test <script>", email: "test@example.invalid", company: "Test only", phone: "", message: "Synthetic inquiry; no email should be sent." };
const integration = process.env.TEST_LEAD_DATABASE === "1";
const sentIds: string[] = [];

test("signed challenges reject tampering, IP changes, instant submissions and expiry", () => {
  const now = Date.now(), token = issueChallenge("one", now);
  assert.equal(verifyChallenge(token, "one", now + 2000), true);
  assert.equal(verifyChallenge(token, "two", now + 2000), false);
  assert.equal(verifyChallenge(token + "0", "one", now + 2000), false);
  assert.equal(verifyChallenge(token, "one", now), false);
  assert.equal(verifyChallenge(token, "one", now + 3_600_001), false);
});

test("intake rejects malformed fields, email header injection and excessive payloads", async () => {
  assert.throws(() => validateInput({ ...input, message: {} }));
  assert.throws(() => validateInput({ ...input, email: "x@y.com\nBcc: z@x.com" }));
  assert.throws(() => validateInput({ ...input, message: "a".repeat(5001) }));
  assert.throws(() => validateInput({ ...input, email: "invalid" }));
  assert.deepEqual(validateInput(input), input);
  await assert.rejects(readBody(new Request("https://www.automationwarrior.ai/api/lead", {
    method: "POST", headers: { "content-type": "application/json" }, body: "a".repeat(17000),
  })), { status: 413 });
});

test("cross-origin and origin-less submissions are rejected", () => {
  assert.equal(validOrigin(new Request("https://www.automationwarrior.ai/api/lead", { headers: { origin: "https://evil.example" } })), false);
  assert.equal(validOrigin(new Request("https://www.automationwarrior.ai/api/lead")), false);
  assert.equal(validOrigin(new Request("https://www.automationwarrior.ai/api/lead", { headers: { origin: "https://www.automationwarrior.ai" } })), true);
});

test("notification text cannot inject HTML and receipts do not reflect arbitrary user text", () => {
  const team = notificationMessage({ kind: "team", lead_id: "test", payload: input });
  const receipt = notificationMessage({ kind: "receipt", lead_id: "test", payload: input });
  assert.equal(team.html, undefined);
  assert.ok(team.text?.includes("Test <script>"));
  assert.ok(!receipt.text?.includes("<script>"));
});

test("the legacy endpoint rejects external origins and silently discards honeypot submissions", async () => {
  const blocked = await legacyIntake(new Request("https://www.automationwarrior.ai/api/lead", {
    method: "POST", headers: { origin: "https://evil.example", "content-type": "application/json" }, body: JSON.stringify(input),
  }));
  assert.equal(blocked.status, 403);
  const bot = await legacyIntake(new Request("https://www.automationwarrior.ai/api/lead", {
    method: "POST", headers: { origin: "https://www.automationwarrior.ai", "content-type": "application/json" }, body: JSON.stringify({ ...input, website: "spam" }),
  }));
  assert.equal(bot.status, 202);
});

test("an unavailable database cannot produce a successful inquiry response", async () => {
  const url = process.env.DATABASE_URL;
  delete process.env.DATABASE_URL;
  try {
    const response = await legacyIntake(new Request("https://www.automationwarrior.ai/api/lead", {
      method: "POST", headers: { origin: "https://www.automationwarrior.ai", "content-type": "application/json" }, body: JSON.stringify(input),
    }));
    assert.equal(response.status, 503);
  } finally { if (url) process.env.DATABASE_URL = url; }
});

test("webhook requires a valid signature and saves a signed delivery event", { skip: !integration }, async () => {
  const originalSecret = process.env.RESEND_WEBHOOK_SECRET;
  const key = Buffer.from("test-webhook-key-never-used-in-production");
  process.env.RESEND_WEBHOOK_SECRET = `whsec_${key.toString("base64")}`;
  const emailId = randomUUID(); sentIds.push(emailId);
  const payload = JSON.stringify({ type: "email.delivered", created_at: new Date().toISOString(), data: { email_id: emailId, tags: { source: "aw-inquiry" } } });
  const id = "msg_test", timestamp = String(Math.floor(Date.now() / 1000));
  const signature = createHmac("sha256", key).update(`${id}.${timestamp}.${payload}`).digest("base64");
  try {
    const bad = await webhook(new Request("https://www.automationwarrior.ai/api/webhooks/resend", { method: "POST", body: payload }));
    assert.equal(bad.status, 401);
    const good = await webhook(new Request("https://www.automationwarrior.ai/api/webhooks/resend", {
      method: "POST", body: payload, headers: { "svix-id": id, "svix-timestamp": timestamp, "svix-signature": `v1,${signature}` },
    }));
    assert.equal(good.status, 200);
    const sql = database();
    const [saved] = await sql`SELECT status FROM aw_email_events WHERE email_id = ${emailId}`;
    assert.equal(saved.status, "delivered");
  } finally {
    if (originalSecret) process.env.RESEND_WEBHOOK_SECRET = originalSecret;
    else delete process.env.RESEND_WEBHOOK_SECRET;
  }
});

test("concurrent duplicate submissions create one durable inquiry and two jobs", { skip: !integration }, async () => {
  const submission = randomUUID();
  const ids = await Promise.all([saveLead(input, submission), saveLead(input, submission), saveLead(input, randomUUID())]);
  assert.equal(new Set(ids).size, 1);
  const sql = database();
  const [count] = await sql`SELECT count(*)::int AS n FROM aw_lead_notifications WHERE lead_id = ${ids[0]}`;
  assert.equal(count.n, 2);
  await assert.rejects(saveLead({ ...input, message: "changed" }, submission), { status: 409 });
});

test("mail outage preserves the inquiry; concurrent workers retry with stable idempotency keys", { skip: !integration }, async () => {
  const id = await saveLead({ ...input, message: "Outage test" }, randomUUID());
  const keys: string[] = [];
  await deliverPending(id, async (_message, key) => { keys.push(key); throw new Error("temporary_outage"); });
  const sql = database();
  const jobs = await sql`SELECT status FROM aw_lead_notifications WHERE lead_id = ${id}`;
  assert.ok(jobs.every(j => j.status === "retry"));
  const [lead] = await sql`SELECT id FROM aw_leads WHERE id = ${id}`;
  assert.equal(lead.id, id);
  await sql`UPDATE aw_lead_notifications SET next_attempt_at = now() WHERE lead_id = ${id}`;
  const successful: string[] = [];
  const sender = async (_message: unknown, key: string) => { successful.push(key); const emailId = randomUUID(); sentIds.push(emailId); return { id: emailId }; };
  await Promise.all([deliverPending(id, sender), deliverPending(id, sender)]);
  assert.equal(successful.length, 2);
  assert.deepEqual(successful.sort(), keys.sort());
});

test("database rate limits remain effective across concurrent workers", { skip: !integration }, async () => {
  const results = await Promise.allSettled(Array.from({ length: 8 }, () => enforceRateLimit("test-client", 3, 60)));
  assert.equal(results.filter(r => r.status === "fulfilled").length, 3);
});

test("delivery events are idempotent and cannot regress from an older event", { skip: !integration }, async () => {
  const sql = database();
  const id = await saveLead({ ...input, message: "Webhook test" }, randomUUID());
  const emailId = randomUUID(); sentIds.push(emailId);
  // Delivery can arrive before we have persisted the provider response.
  await recordDelivery(emailId, "delivered", "2026-09-23T12:00:02Z");
  await sql`UPDATE aw_lead_notifications SET email_id = ${emailId}, status = 'accepted' WHERE lead_id = ${id} AND kind = 'team'`;
  await reconcileDelivery();
  await recordDelivery(emailId, "accepted", "2026-09-23T12:00:01Z");
  const [row] = await sql`SELECT status FROM aw_lead_notifications WHERE email_id = ${emailId}`;
  assert.equal(row.status, "delivered");
  await recordDelivery(emailId, "bounced", "2026-09-23T12:00:03Z");
  const [bounced] = await sql`SELECT status FROM aw_lead_notifications WHERE email_id = ${emailId}`;
  assert.equal(bounced.status, "bounced");
});

test("uncertain sends stop before the provider idempotency window expires", { skip: !integration }, async () => {
  const sql = database();
  const id = await saveLead({ ...input, message: "Expired retry test" }, randomUUID());
  await sql`UPDATE aw_lead_notifications SET status = 'retry', first_attempt_at = now() - interval '24 hours' WHERE lead_id = ${id}`;
  let sent = 0;
  await deliverPending(id, async () => { sent++; return { id: randomUUID() }; });
  assert.equal(sent, 0);
  const jobs = await sql`SELECT status FROM aw_lead_notifications WHERE lead_id = ${id}`;
  assert.ok(jobs.every(j => j.status === "needs_attention"));
});

after(async () => {
  if (!integration) return;
  const sql = database();
  await sql`DELETE FROM aw_leads WHERE namespace = ${namespace}`;
  await sql`DELETE FROM aw_lead_rate_limits WHERE key LIKE ${namespace + ":%"}`;
  await sql`DELETE FROM aw_email_events WHERE email_id = ANY(${sentIds}::text[])`;
});
