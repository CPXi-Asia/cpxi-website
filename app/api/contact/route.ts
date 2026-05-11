import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "hello@cpxi-asia.com";
const FROM_EMAIL = "CPXi Asia Website <onboarding@resend.dev>"; // TODO: switch to a verified sender domain (e.g. noreply@cpxi-asia.com) once the Resend domain is set up.

const BUDGET_OPTIONS = new Set([
  "Under $10k",
  "$10k–$50k",
  "$50k–$150k",
  "$150k+",
]);

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  budget?: string;
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
  const budget = body.budget?.trim() ?? "";

  if (!name || !company || !email || !budget) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (!BUDGET_OPTIONS.has(budget)) {
    return NextResponse.json({ error: "Invalid budget option." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Graceful no-op: log to server, succeed to client.
    // Drop in RESEND_API_KEY via `vercel env add` to enable delivery.
    console.warn("[contact] RESEND_API_KEY missing — lead captured but not emailed:", {
      name,
      company,
      email,
      budget,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `New website lead — ${company} (${budget})`,
    text: [
      `Name:    ${name}`,
      `Company: ${company}`,
      `Email:   ${email}`,
      `Budget:  ${budget}`,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
