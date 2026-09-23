import { Resend } from "resend";
import { readTextBounded, SubmissionError } from "@/lib/leads/validation";
import { deliveryState, recordDelivery } from "@/lib/leads/delivery";
export const runtime = "nodejs";
export async function POST(req: Request) {
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (!secret) return new Response(null, { status: 503 });
  if (Number(req.headers.get("content-length")) > 65_536) return new Response(null, { status: 413 });
  let payload: string;
  try { payload = await readTextBounded(req, 65_536); }
  catch (error) { return new Response(null, { status: error instanceof SubmissionError ? error.status : 400 }); }
  let event;
  try {
    event = new Resend(process.env.RESEND_API_KEY).webhooks.verify({
      payload, webhookSecret: secret,
      headers: { id: req.headers.get("svix-id") || "", timestamp: req.headers.get("svix-timestamp") || "", signature: req.headers.get("svix-signature") || "" },
    });
  } catch { return new Response(null, { status: 401 }); }
  const status = deliveryState(event.type);
  if (!status || !("email_id" in event.data)) return Response.json({ received: true });
  // The account serves multiple domains. Only persist this site's inquiry notifications.
  if (!("tags" in event.data) || event.data.tags?.source !== "aw-inquiry") return Response.json({ received: true });
  try {
    await recordDelivery(event.data.email_id, status, event.created_at);
    if (["bounced", "complained", "failed", "suppressed"].includes(status)) console.error("[leads] delivery_failure_event", { emailId: event.data.email_id, status });
    return Response.json({ received: true });
  } catch {
    console.error("[leads] webhook_save_failed");
    return new Response(null, { status: 503 });
  }
}
