import { NextResponse } from "next/server";
import { clientIdentity, issueChallenge, SubmissionError } from "@/lib/leads/validation";
import { enforceRateLimit } from "@/lib/leads/store";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET(req: Request) {
  if (req.headers.get("sec-fetch-site") === "cross-site") return new Response(null, { status: 403 });
  try {
    const identity = clientIdentity(req);
    await enforceRateLimit(`challenge:${identity}`, 60, 900);
    return NextResponse.json({ challenge: issueChallenge(identity) }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return NextResponse.json({ error: "Form verification is temporarily unavailable." }, {
      status: error instanceof SubmissionError ? error.status : 503, headers: { "Cache-Control": "no-store" },
    });
  }
}
