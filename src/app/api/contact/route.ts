import { NextResponse } from "next/server";
import { getEnv } from "@/lib/env";
import { sendEmail } from "@/lib/email";
import { contactSchema, type FormApiResponse } from "@/lib/schemas";
import { clientIpFrom, formRateLimiter, verifyTurnstile } from "@/lib/security";

function json(body: FormApiResponse, status = 200) {
  return NextResponse.json(body, { status });
}

export async function POST(request: Request): Promise<NextResponse<FormApiResponse>> {
  try {
    const ip = clientIpFrom(request);
    const { allowed } = await formRateLimiter.check(`contact:${ip}`);
    if (!allowed) {
      return json({ ok: false, message: "rate_limited" }, 429);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false, message: "invalid_request" }, 400);
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return json({ ok: false, message: "invalid_request" }, 400);
    }

    // Honeypot filled — pretend success so bots learn nothing.
    if (parsed.data.website !== "") {
      return json({ ok: true, message: "received" });
    }

    const turnstileToken =
      typeof body === "object" && body !== null && "turnstileToken" in body
        ? String((body as Record<string, unknown>).turnstileToken ?? "")
        : undefined;
    if (!(await verifyTurnstile(turnstileToken))) {
      return json({ ok: false, message: "verification_failed" }, 400);
    }

    const env = getEnv();
    const data = parsed.data;
    const to = env.CONTACT_TO_EMAIL ?? env.DEMO_TO_EMAIL;
    if (to) {
      await sendEmail({
        to,
        subject: `Raqeem contact — ${data.subject}`,
        text: [
          `Name: ${data.name}`,
          `Organization: ${data.organization}`,
          `Phone: ${data.phone}`,
          `Email: ${data.email}`,
          "",
          data.message,
        ].join("\n"),
      });
    }

    return json({ ok: true, message: "received" });
  } catch {
    // Never leak internals or log submitted personal data.
    return json({ ok: false, message: "server_error" }, 500);
  }
}
