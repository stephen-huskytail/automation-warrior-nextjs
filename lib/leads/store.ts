import { randomUUID } from "node:crypto";
import { database, leadNamespace } from "./db";
import { secretHash, SubmissionError, type LeadInput } from "./validation";

export async function enforceRateLimit(identity: string, limit: number, windowSeconds: number) {
  const sql = database();
  const bucket = Math.floor(Date.now() / (windowSeconds * 1000));
  const key = `${leadNamespace()}:${identity}:${bucket}`;
  const [result] = await sql`
    INSERT INTO aw_lead_rate_limits (key, hits, expires_at)
    VALUES (${key}, 1, now() + ${windowSeconds} * interval '1 second')
    ON CONFLICT (key) DO UPDATE SET hits = aw_lead_rate_limits.hits + 1
    RETURNING hits`;
  if (result.hits > limit) throw new SubmissionError(429, "Too many attempts. Please try again later or email us directly.");
}

export async function saveLead(input: LeadInput, submissionId: string) {
  const sql = database();
  const namespace = leadNamespace();
  const payload = JSON.stringify(input);
  const day = new Date().toISOString().slice(0, 10);
  const fingerprint = secretHash(`lead:${day}:${payload}`);
  // The inquiry and both email jobs commit together. A lost HTTP response is safe to retry.
  const results = await sql.transaction([
    sql`SELECT pg_advisory_xact_lock(hashtextextended(${namespace + submissionId}, 0))`,
    sql`INSERT INTO aw_leads (id, namespace, submission_id, fingerprint, payload)
      SELECT ${randomUUID()}::uuid, ${namespace}, ${submissionId}::uuid, ${fingerprint}, ${payload}::jsonb
      WHERE NOT EXISTS (SELECT 1 FROM aw_lead_submissions WHERE namespace = ${namespace} AND submission_id = ${submissionId})
      ON CONFLICT DO NOTHING`,
    sql`INSERT INTO aw_lead_submissions (namespace, submission_id, lead_id)
      SELECT ${namespace}, ${submissionId}::uuid, id FROM aw_leads
      WHERE namespace = ${namespace} AND fingerprint = ${fingerprint}
      ON CONFLICT DO NOTHING`,
    sql`INSERT INTO aw_lead_notifications (id, lead_id, kind)
      SELECT l.id::text || ':' || k.kind, l.id, k.kind
      FROM aw_leads l CROSS JOIN (VALUES ('team'), ('receipt')) k(kind)
      WHERE l.id = (SELECT lead_id FROM aw_lead_submissions WHERE namespace = ${namespace} AND submission_id = ${submissionId})
      ON CONFLICT DO NOTHING`,
    sql`SELECT l.id, l.payload FROM aw_leads l JOIN aw_lead_submissions s ON s.lead_id = l.id
      WHERE s.namespace = ${namespace} AND s.submission_id = ${submissionId}`,
  ]);
  const lead = results[4][0];
  if (!lead) throw new Error("lead_save_failed");
  const existing = lead.payload as LeadInput;
  if (Object.keys(input).some(key => existing[key as keyof LeadInput] !== input[key as keyof LeadInput])) {
    throw new SubmissionError(409, "This request was already received. Refresh the page to send a different inquiry.");
  }
  return lead.id as string;
}
