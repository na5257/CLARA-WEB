import { NextResponse } from "next/server";
import { ENROLL_EMAIL } from "../../enroll-config";

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

    const payload = {
      _subject: `Ny CLARA-tilmelding: ${firstName} ${lastName}`,
      _template: "table",
      _captcha: "false",
      _replyto: email,
      name: `${firstName} ${lastName}`,
      email,
      telefon: phone || "Ikke oplyst",
      alder: String(age),
      diagnose: "Bekræftet ADHD-diagnose",
      kommentar: message || "Ingen",
      sprog: language,
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(
      `https://formsubmit.co/ajax/${ENROLL_EMAIL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://clara-web-phi.vercel.app",
          Referer: "https://clara-web-phi.vercel.app/",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      }
    ).finally(() => clearTimeout(timeout));

    const result = await response.json().catch(() => ({}));
    const sent = result.success === true || result.success === "true";
    const needsActivation =
      typeof result.message === "string" &&
      result.message.toLowerCase().includes("activat");

    if (!sent && !needsActivation) {
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
