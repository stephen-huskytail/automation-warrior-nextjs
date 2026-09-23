import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";

export class SubmissionError extends Error {
  constructor(public status: number, message: string) { super(message); }
}

export interface LeadInput {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export function secretHash(value: string) {
  const secret = process.env.LEAD_FORM_SECRET;
  if (!secret) throw new Error("lead_form_unconfigured");
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function constantEqual(a: string, b: string) {
  const left = Buffer.from(a), right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export function clientIdentity(req: Request) {
  // Vercel sets this header at its edge; raw addresses are never saved in the lead database.
  const ip = req.headers.get("x-vercel-forwarded-for") ||
    req.headers.get("x-forwarded-for") || "local";
  return secretHash(`ip:${ip.split(",")[0].trim()}`);
}

export function validOrigin(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  const allowed = new Set([
    "https://www.automationwarrior.ai", "https://automationwarrior.ai",
    ...(process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`] : []),
    ...(process.env.VERCEL_BRANCH_URL ? [`https://${process.env.VERCEL_BRANCH_URL}`] : []),
    ...(process.env.NODE_ENV !== "production" ? [new URL(req.url).origin] : []),
  ]);
  return allowed.has(origin);
}

export function issueChallenge(identity: string, now = Date.now()) {
  const body = `${now}.${randomUUID()}`;
  return `${body}.${secretHash(`challenge:${identity}:${body}`)}`;
}

export function verifyChallenge(token: unknown, identity: string, now = Date.now()) {
  if (typeof token !== "string" || token.length > 200) return false;
  const [time, nonce, signature, extra] = token.split(".");
  const age = now - Number(time);
  if (extra || !nonce || !signature || !Number.isFinite(age) || age < 1000 || age > 3_600_000) return false;
  return constantEqual(signature, secretHash(`challenge:${identity}:${time}.${nonce}`));
}

export async function readBody(req: Request) {
  if (!req.headers.get("content-type")?.includes("application/json")) {
    throw new SubmissionError(415, "Please submit the form as JSON.");
  }
  const reader = req.body?.getReader();
  if (!reader) throw new SubmissionError(400, "Please complete the form.");
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 16_384) {
      await reader.cancel();
      throw new SubmissionError(413, "Your message is too long. Please shorten it.");
    }
    chunks.push(value);
  }
  try {
    const value = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error();
    return value as Record<string, unknown>;
  } catch { throw new SubmissionError(400, "Please complete the form and try again."); }
}

export function validateInput(body: Record<string, unknown>): LeadInput {
  const read = (key: string, max: number, required = false) => {
    const value = body[key] ?? "";
    if (typeof value !== "string" || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) {
      throw new SubmissionError(400, `Please check the ${key} field.`);
    }
    const clean = value.trim();
    if (required && !clean) throw new SubmissionError(400, `Please enter your ${key}.`);
    if (key !== "message" && /[\r\n]/.test(clean)) throw new SubmissionError(400, `Please check the ${key} field.`);
    return clean;
  };
  const input = {
    name: read("name", 120, true), email: read("email", 254, true).toLowerCase(),
    company: read("company", 200), phone: read("phone", 50), message: read("message", 5000, true),
  };
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(input.email)) {
    throw new SubmissionError(400, "Please enter a valid email address.");
  }
  if ((input.message.match(/https?:\/\//gi) || []).length > 5) {
    throw new SubmissionError(400, "Please include fewer links in your message.");
  }
  return input;
}

export function validateSubmissionId(value: unknown): string {
  if (typeof value !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)) {
    throw new SubmissionError(400, "Please refresh the form and try again.");
  }
  return value;
}
