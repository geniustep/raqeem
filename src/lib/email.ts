import "server-only";
import { getEnv } from "./env";

/**
 * Minimal email delivery interface, configured entirely through environment
 * variables. The default transport posts to a Resend-compatible HTTP API.
 * When no provider is configured the message is dropped (never logged with
 * its contents) and `false` is returned so callers can decide how to react.
 */

export interface EmailMessage {
  to: string;
  subject: string;
  text: string;
}

export async function sendEmail(message: EmailMessage): Promise<boolean> {
  const env = getEnv();

  if (!env.EMAIL_PROVIDER_API_KEY || !env.EMAIL_FROM) {
    console.warn("[email] provider not configured — message not delivered");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.EMAIL_PROVIDER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.EMAIL_FROM,
        to: [message.to],
        subject: message.subject,
        text: message.text,
      }),
    });
    if (!response.ok) {
      console.error(`[email] provider responded with status ${response.status}`);
    }
    return response.ok;
  } catch {
    console.error("[email] delivery failed");
    return false;
  }
}
