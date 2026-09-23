import { after, NextResponse } from "next/server";
import { deliverPending } from "./delivery";
import { enforceRateLimit, saveLead } from "./store";
import { clientIdentity, readBody, secretHash, SubmissionError, validOrigin, validateInput, validateSubmissionId, verifyChallenge } from "./validation";

export async function acceptInquiry(req: Request) {
  try {
    if (!validOrigin(req)) throw new SubmissionError(403, "Please use the inquiry form on our website.");
    const body = await readBody(req);
    if (body.website) return NextResponse.json({ success: true, ok: true }, { status: 202 });
    const identity = clientIdentity(req);
    await enforceRateLimit(`submit:${identity}`, 10, 900);
    if (!verifyChallenge(body.challenge, identity)) throw new SubmissionError(400, "Please try again. The form verification expired or was not ready.");
    const input = validateInput(body);
    const submissionId = validateSubmissionId(body.submissionId);
    await enforceRateLimit(`email:${secretHash(input.email)}`, 5, 3600);
    const id = await saveLead(input, submissionId);
    after(async () => {
      try { await deliverPending(id); }
      catch { console.error("[leads] background_delivery_failed", { id }); }
    });
    return NextResponse.json({ success: true, ok: true, reference: id }, { status: 202, headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    const known = error instanceof SubmissionError;
    if (!known) console.error("[leads] intake_unavailable");
    return NextResponse.json({ error: known ? error.message : "We couldn’t save your inquiry. Please try again or email us directly." }, {
      status: known ? error.status : 503,
      headers: { "Cache-Control": "no-store", ...(known && error.status === 429 ? { "Retry-After": "900" } : {}) },
    });
  }
}
