import { NextResponse } from "next/server";
import { getEnv } from "@/lib/env";
import { sendEmail } from "@/lib/email";
import { demoRequestSchema, type FormApiResponse } from "@/lib/schemas";
import { clientIpFrom, formRateLimiter, verifyTurnstile } from "@/lib/security";

function json(body: FormApiResponse, status = 200) {
  return NextResponse.json(body, { status });
}

export async function POST(request: Request): Promise<NextResponse<FormApiResponse>> {
  try {
    const ip = clientIpFrom(request);
    const { allowed } = await formRateLimiter.check(`demo:${ip}`);
    if (!allowed) {
      return json({ ok: false, message: "rate_limited" }, 429);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false, message: "invalid_request" }, 400);
    }

    const parsed = demoRequestSchema.safeParse(body);
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
    const to = env.DEMO_TO_EMAIL ?? env.CONTACT_TO_EMAIL;
    if (to) {
      await sendEmail({
        to,
        subject: `Raqeem demo request — ${data.organizationName}`,
        text: [
          `Organization: ${data.organizationName}`,
          `Type: ${data.organizationType}`,
          `City: ${data.city}`,
          `Students: ${data.estimatedStudentCount}`,
          `Name: ${data.fullName}`,
          `Job title: ${data.jobTitle}`,
          `Phone: ${data.phone}`,
          `Email: ${data.email}`,
          `Preferred language: ${data.preferredLanguage}`,
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
