import { NextResponse } from "next/server";
import { site } from "@/lib/data";

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const projectType = payload.projectType?.trim() ?? "Unity project";
  const message = payload.message?.trim() ?? "";

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, message: "Please enter your name." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email." },
      { status: 400 },
    );
  }

  if (message.length < 20) {
    return NextResponse.json(
      { ok: false, message: "Please include a little more project detail." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const subject = `Portfolio inquiry: ${projectType}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Project type: ${projectType}`,
    "",
    message,
  ].join("\n");

  if (webhookUrl) {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        projectType,
        message,
        source: site.url,
      }),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { ok: false, message: "The message could not be forwarded." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Thanks. Your inquiry has been sent.",
    });
  }

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  return NextResponse.json({
    ok: true,
    mailto,
    message: "Thanks. Your email app is opening with the inquiry ready.",
  });
}
