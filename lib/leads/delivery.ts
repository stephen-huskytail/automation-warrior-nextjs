import { randomUUID } from "node:crypto";
import { Resend, type CreateEmailOptions } from "resend";
import { database, leadNamespace } from "./db";
import type { LeadInput } from "./validation";

type Sender = (message: CreateEmailOptions, key: string) => Promise<{ id: string }>;
type Job = { id: string; lead_id: string; kind: "team" | "receipt"; attempts: number; lock_token: string; payload: LeadInput };

export function notificationMessage(job: Pick<Job, "kind" | "lead_id" | "payload">): CreateEmailOptions {
  const lead = job.payload;
  const shared = { from: "noreply@automationwarrior.ai" };
  if (job.kind === "receipt") return {
    ...shared, to: lead.email, replyTo: "stephen@automationwarrior.ai", tags: [{ name: "source", value: "aw-inquiry" }],
    subject: "We received your strategy call request",
    // Do not reflect user-supplied text into automatic receipts.
    text: "Thanks for contacting Automation Warrior. Your inquiry has been saved. We’ll reply within one business day to arrange your strategy call.\n\nStephen Gardner\nAutomation Warrior\nhttps://www.automationwarrior.ai",
  };
  return {
    ...shared, to: "stephen@automationwarrior.ai", replyTo: lead.email, tags: [{ name: "source", value: "aw-inquiry" }],
    subject: "New strategy call request — Automation Warrior",
    text: `A strategy call inquiry has been saved.\n\nName: ${lead.name}\nEmail: ${lead.email}\nCompany: ${lead.company || "Not provided"}\nPhone: ${lead.phone || "Not provided"}\n\n${lead.message}\n\nReference: ${job.lead_id}`,
  };
}

async function sendEmail(message: CreateEmailOptions, key: string) {
  if (!process.env.RESEND_API_KEY) throw new Error("email_unconfigured");
  const { data, error } = await new Resend(process.env.RESEND_API_KEY).emails.send(message, { idempotencyKey: key });
  if (error || !data?.id) throw new Error(error?.name || "email_send_failed");
  return { id: data.id };
}

export async function deliverPending(leadId: string | null = null, sender?: Sender) {
  const sql = database();
  const namespace = leadNamespace();
  // Never send real notifications from a branch preview or local development.
  const enabled = process.env.VERCEL_ENV === "production" || Boolean(sender);
  const lockToken = randomUUID();
  // Stop uncertain sends before Resend's 24-hour idempotency retention expires.
  await sql`UPDATE aw_lead_notifications n SET status = 'needs_attention', error_code = 'retry_window_expired', updated_at = now()
    FROM aw_leads l WHERE n.lead_id = l.id AND l.namespace = ${namespace}
    AND n.status IN ('pending', 'retry', 'processing')
    AND (n.first_attempt_at < now() - interval '23 hours' OR n.attempts >= 8)
    AND (n.lock_until IS NULL OR n.lock_until < now())`;
  const jobs = await sql`
    WITH candidates AS (
      SELECT n.id FROM aw_lead_notifications n JOIN aw_leads l ON l.id = n.lead_id
      WHERE l.namespace = ${namespace} AND (${leadId}::uuid IS NULL OR l.id = ${leadId}::uuid)
        AND n.status IN ('pending', 'retry', 'processing') AND n.next_attempt_at <= now()
        AND (n.lock_until IS NULL OR n.lock_until < now())
      ORDER BY n.created_at, n.kind DESC LIMIT 10 FOR UPDATE OF n SKIP LOCKED
    ), claimed AS (
      UPDATE aw_lead_notifications n SET status = 'processing', lock_token = ${lockToken},
        lock_until = now() + interval '5 minutes', attempts = attempts + 1,
        first_attempt_at = COALESCE(first_attempt_at, now()), updated_at = now()
      FROM candidates c WHERE n.id = c.id RETURNING n.*
    ) SELECT c.*, l.payload FROM claimed c JOIN aw_leads l ON l.id = c.lead_id` as Job[];
  for (const [index, job] of jobs.entries()) {
    if (enabled && !sender && index > 0) await new Promise(resolve => setTimeout(resolve, 650));
    try {
      const result = enabled ? await (sender || sendEmail)(notificationMessage(job), `aw-lead/${job.id}`) : null;
      await sql`UPDATE aw_lead_notifications SET status = ${enabled ? "accepted" : "preview"},
        email_id = ${result?.id || null}, lock_until = NULL, lock_token = NULL, error_code = NULL, updated_at = now()
        WHERE id = ${job.id} AND lock_token = ${lockToken}`;
    } catch (error) {
      const delaySeconds = Math.min(60 * 3 ** (job.attempts - 1), 7200);
      // Store only an error code; contact details never go to runtime logs.
      const code = error instanceof Error && /^[a-z_]+$/.test(error.message) ? error.message : "delivery_or_storage_error";
      await sql`UPDATE aw_lead_notifications SET status = 'retry', error_code = ${code},
        next_attempt_at = now() + ${delaySeconds} * interval '1 second',
        lock_until = NULL, lock_token = NULL, updated_at = now()
        WHERE id = ${job.id} AND lock_token = ${lockToken}`;
      console.error("[leads] notification_retry", { id: job.id, code });
    }
  }
  return jobs.length;
}

export function deliveryState(type: string) {
  const states: Record<string, string> = {
    "email.sent": "accepted", "email.delivered": "delivered", "email.delivery_delayed": "delayed",
    "email.bounced": "bounced", "email.complained": "complained", "email.failed": "failed", "email.suppressed": "suppressed",
  };
  return states[type];
}

export async function recordDelivery(emailId: string, status: string, eventAt: string) {
  const sql = database();
  // Keep events that arrive before the send response is saved; cron reconciles them too.
  await sql`INSERT INTO aw_email_events (email_id, status, event_at) VALUES (${emailId}, ${status}, ${eventAt}::timestamptz)
    ON CONFLICT (email_id) DO UPDATE SET status = EXCLUDED.status, event_at = EXCLUDED.event_at, received_at = now()
    WHERE aw_email_events.event_at < EXCLUDED.event_at`;
  await reconcileDelivery();
}

export async function reconcileDelivery() {
  const sql = database();
  await sql`UPDATE aw_lead_notifications n SET status = e.status, last_event_at = e.event_at, updated_at = now()
    FROM aw_email_events e WHERE n.email_id = e.email_id
    AND (n.last_event_at IS NULL OR n.last_event_at < e.event_at)`;
}

export async function monitorDelivery() {
  const sql = database();
  const namespace = leadNamespace();
  const [summary] = await sql`SELECT
    count(*) FILTER (WHERE n.status IN ('pending','retry','processing'))::int AS pending,
    count(*) FILTER (WHERE n.status IN ('bounced','complained','failed','suppressed','needs_attention'))::int AS failures,
    count(*) FILTER (WHERE n.kind = 'team' AND n.status IN ('pending','retry','processing') AND n.created_at < now() - interval '15 minutes')::int AS overdue,
    count(*) FILTER (WHERE n.status IN ('accepted','delayed') AND n.updated_at < now() - interval '24 hours')::int AS unconfirmed,
    count(*) FILTER (WHERE n.status = 'delivered')::int AS delivered
    FROM aw_lead_notifications n JOIN aw_leads l ON l.id = n.lead_id WHERE l.namespace = ${namespace}`;
  await sql`INSERT INTO aw_lead_monitor (namespace, summary) VALUES (${namespace}, ${JSON.stringify(summary)}::jsonb)
    ON CONFLICT (namespace) DO UPDATE SET checked_at = now(), summary = EXCLUDED.summary`;
  if (summary.failures || summary.overdue || summary.unconfirmed) console.error("[leads] delivery_attention", summary);
  return summary;
}

export async function cleanupExpired() {
  const sql = database();
  await sql.transaction([
    sql`DELETE FROM aw_lead_rate_limits WHERE expires_at < now()`,
    sql`DELETE FROM aw_email_events WHERE received_at < now() - interval '30 days'`,
    sql`DELETE FROM aw_leads WHERE created_at < now() - interval '365 days'
      OR (namespace <> 'production' AND created_at < now() - interval '7 days')`,
  ]);
}
