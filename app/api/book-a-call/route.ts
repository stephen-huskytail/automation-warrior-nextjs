import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "hello@automationwarrior.ai";
const FROM_EMAIL = "noreply@automationwarrior.ai";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Notify the Automation Warrior team
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New strategy call request from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border-radius:12px;">
          <h2 style="margin:0 0 24px;color:#fff;font-size:24px;">New Strategy Call Request</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;color:#999;width:120px;">Name</td><td style="padding:10px 0;color:#fff;">${name}</td></tr>
            <tr><td style="padding:10px 0;color:#999;">Email</td><td style="padding:10px 0;color:#fff;"><a href="mailto:${email}" style="color:#ff4533;">${email}</a></td></tr>
            ${company ? `<tr><td style="padding:10px 0;color:#999;">Company</td><td style="padding:10px 0;color:#fff;">${company}</td></tr>` : ""}
            ${phone ? `<tr><td style="padding:10px 0;color:#999;">Phone</td><td style="padding:10px 0;color:#fff;">${phone}</td></tr>` : ""}
            <tr><td style="padding:10px 0;color:#999;vertical-align:top;">Message</td><td style="padding:10px 0;color:#fff;">${message.replace(/\n/g, "<br/>")}</td></tr>
          </table>
          <div style="margin-top:32px;padding-top:24px;border-top:1px solid #ffffff1a;">
            <a href="mailto:${email}" style="background:#ff4533;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:500;">Reply to ${name}</a>
          </div>
        </div>
      `,
    });

    // Auto-reply to the prospect
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We got your message — talk soon!",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border-radius:12px;">
          <h2 style="margin:0 0 16px;color:#fff;">Hey ${name}, thanks for reaching out!</h2>
          <p style="color:#999;line-height:1.6;margin:0 0 24px;">
            We've received your message and will be in touch within one business day to schedule your free strategy call.
          </p>
          <p style="color:#999;line-height:1.6;margin:0;">
            — The Automation Warrior Team
          </p>
          <div style="margin-top:32px;padding-top:24px;border-top:1px solid #ffffff1a;">
            <a href="https://www.automationwarrior.ai" style="color:#ff4533;text-decoration:none;font-size:14px;">automationwarrior.ai</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("book-a-call email error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
