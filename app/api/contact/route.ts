import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // nodemailer requires Node runtime, not Edge.

const TO_EMAIL = "hello@cpxi-asia.com";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const email = body.email?.trim() ?? "";

  if (!name || !company || !email) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    // Graceful no-op: log to server, succeed to client.
    // Set SMTP_USER + SMTP_PASS via `vercel env add` to enable delivery.
    console.warn("[contact] SMTP_USER/SMTP_PASS missing — lead captured but not emailed:", {
      name,
      company,
      email,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    await transporter.sendMail({
      from: `"CPXi Asia Website" <${smtpUser}>`,
      to: TO_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `New website lead — ${company}`,
      text: [
        `Name:    ${name}`,
        `Company: ${company}`,
        `Email:   ${email}`,
        ``,
        `(Reply to this email to respond directly to ${name}.)`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[contact] SMTP send failed:", err);
    return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
