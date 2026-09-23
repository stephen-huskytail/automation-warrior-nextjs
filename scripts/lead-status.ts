import { database } from "../lib/leads/db";

// Run only from a trusted local session with a securely pulled production DATABASE_URL.
const sql = database();
const id = process.argv[2];
if (id) {
  if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("Pass a valid inquiry reference.");
  const rows = await sql`SELECT l.id, l.created_at, l.payload, n.kind, n.status, n.attempts, n.error_code
    FROM aw_leads l JOIN aw_lead_notifications n ON n.lead_id = l.id WHERE l.id = ${id} AND l.namespace = 'production'`;
  console.log(JSON.stringify(rows, null, 2));
} else {
  // Default output deliberately excludes contact details and inquiry text.
  const health = await sql`SELECT checked_at, summary FROM aw_lead_monitor WHERE namespace = 'production'`;
  const rows = await sql`SELECT l.id, l.created_at, n.kind, n.status, n.attempts, n.error_code
    FROM aw_leads l JOIN aw_lead_notifications n ON n.lead_id = l.id
    WHERE l.namespace = 'production' ORDER BY l.created_at DESC LIMIT 50`;
  console.log(JSON.stringify({ health, notifications: rows }, null, 2));
}
