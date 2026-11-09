import { NextResponse } from "next/server";
import { ENROLL_EMAIL } from "../../enroll-config";

// Without a verified domain, Resend only delivers from this sender to the
// email address that owns the Resend account.
const FROM = process.env.RESEND_FROM || "CLARA tilmelding <onboarding@resend.dev>";

function asString(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot: bots fill this, humans never see it
    if (asString(body.company, 200)) {
      return NextResponse.json({ ok: true });
    }

    const firstName = asString(body.firstName, 100);
    const lastName = asString(body.lastName, 100);
    const email = asString(body.email, 200).toLowerCase();
    const phone = asString(body.phone, 40);
    const message = asString(body.message, 2000);
    const language = body.language === "en" ? "English" : "Dansk";
    const age = Number(body.age);

    if (!firstName || !lastName || !isValidEmail(email)) {
      return NextResponse.json({ error: "invalid" }, { status: 400 });
    }

    if (!Number.isInteger(age) || age < 18 || age > 65) {
      return NextResponse.json({ error: "invalid" }, { status: 400 });
    }

    if (body.diagnosis !== true) {
      return NextResponse.json({ error: "invalid" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ error: "send_failed" }, { status: 500 });
    }

    const text = [
      "Ny tilmelding til CLARA-forsøget",
      "",
      `Navn: ${firstName} ${lastName}`,
      `E-mail: ${email}`,
      `Telefon: ${phone || "Ikke oplyst"}`,
      `Alder: ${age}`,
      "Diagnose: Bekræftet ADHD-diagnose",
      `Sprog på siden: ${language}`,
      "",
      "Kommentar:",
      message || "Ingen",
    ].join("\n");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [ENROLL_EMAIL],
        reply_to: email,
        subject: `Ny CLARA-tilmelding: ${firstName} ${lastName}`,
        text,
      }),
      signal: controller.signal,
    }).finally(() => clearTimeout(timeout));

    if (!response.ok) {
      console.error("Resend error", response.status, await response.text().catch(() => ""));
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enroll failed", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
