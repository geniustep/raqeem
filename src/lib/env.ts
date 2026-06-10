import "server-only";
import { z } from "zod";

/**
 * Server-side environment validation. Importing this module outside the
 * server bundle fails at build time thanks to `server-only`.
 *
 * In production the app refuses to start without the required variables and
 * reports exactly which ones are missing or invalid.
 */

const isProduction = process.env.NODE_ENV === "production";

const optionalUrl = z
  .union([z.url(), z.literal("")])
  .optional()
  .transform((value) => (value === "" ? undefined : value));

const optionalString = z
  .string()
  .optional()
  .transform((value) => (value === "" ? undefined : value));

const optionalEmail = z
  .union([z.email(), z.literal("")])
  .optional()
  .transform((value) => (value === "" ? undefined : value));

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: isProduction ? z.url() : z.url().default("http://localhost:3000"),
  NEXT_PUBLIC_APP_URL: isProduction ? z.url() : z.url().default("https://app.raqeem.ma"),
  NEXT_PUBLIC_FACEBOOK_URL: optionalUrl,
  NEXT_PUBLIC_INSTAGRAM_URL: optionalUrl,
  NEXT_PUBLIC_LINKEDIN_URL: optionalUrl,
  NEXT_PUBLIC_ANALYTICS_ID: optionalString,
  CONTACT_TO_EMAIL: optionalEmail,
  DEMO_TO_EMAIL: optionalEmail,
  EMAIL_FROM: optionalEmail,
  EMAIL_PROVIDER_API_KEY: optionalString,
  TURNSTILE_SITE_KEY: optionalString,
  TURNSTILE_SECRET_KEY: optionalString,
});

export type Env = z.infer<typeof envSchema>;

let cachedEnv: Env | null = null;

export function getEnv(): Env {
  if (cachedEnv) {
    return cachedEnv;
  }

  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    const details = parsed.error.issues
      .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
      .join("\n");
    throw new Error(
      `Invalid or missing environment variables:\n${details}\n` +
        "See .env.example for the full list of supported variables.",
    );
  }

  cachedEnv = parsed.data;
  return cachedEnv;
}
