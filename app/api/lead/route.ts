import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = "noreply@automationwarrior.ai";
const TO_EMAIL = "stephen@automationwarrior.ai";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
    },
  });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Object.keys(body).length === 0) {
    return NextResponse.json({ ok: false, error: "Empty payload" }, { status: 400 });
  }

  const rows = Object.entries(body)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 0;color:#999;vertical-align:top;width:140px;">${key.replace(/</g, "&lt;")}</td><td style="padding:8px 0;color:#fff;">${String(
          value ?? ""
        ).replace(/</g, "&lt;")}</td></tr>`
    )
    .join("");

  const resend = new Resend(process.env.RESEND_API_KEY);
  // resend.emails.send() reports API failures via {error}, it does NOT throw —
  // the result must be checked or a failed send still returns success
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: "New lead from automationwarrior.ai",
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border-radius:12px;">
        <h2 style="margin:0 0 24px;color:#fff;font-size:24px;">New Lead</h2>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
      </div>
    `,
  });

  if (error) {
    console.error("[lead] delivery FAILED — lead NOT delivered:", error, body);
    return NextResponse.json({ ok: false, error: "Failed to deliver lead" }, { status: 502 });
  }

  return NextResponse.json(
    {
      ok: true,
      acceptedAt: new Date().toISOString(),
    },
    { status: 202 },
  );
}

export async function GET() {
  return NextResponse.json(
    {
      ok: false,
      error: "Method not allowed",
    },
    {
      status: 405,
      headers: {
        Allow: "POST, OPTIONS",
      },
    },
  );
}
