import { cleanupExpired, deliverPending, monitorDelivery, reconcileDelivery } from "@/lib/leads/delivery";
import { constantEqual } from "@/lib/leads/validation";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || !constantEqual(req.headers.get("authorization") || "", `Bearer ${secret}`)) return new Response(null, { status: 401 });
  try {
    await deliverPending();
    await reconcileDelivery();
    await cleanupExpired();
    const summary = await monitorDelivery();
    return Response.json({ ok: true, ...summary }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    console.error("[leads] scheduled_check_failed");
    return Response.json({ ok: false }, { status: 503 });
  }
}
