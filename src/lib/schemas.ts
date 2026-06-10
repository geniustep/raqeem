import { z } from "zod";

/**
 * Form schemas shared between the client (react-hook-form) and the server
 * (route handlers). Error messages are translation keys under
 * `forms.common.*` and are resolved in the UI.
 */

export const organizationTypes = [
  "school",
  "institute",
  "tutoring_center",
  "language_center",
  "other",
] as const;

export const studentCounts = [
  "less_than_100",
  "100_to_300",
  "301_to_700",
  "701_to_1500",
  "more_than_1500",
] as const;

export const preferredLanguages = ["ar", "fr", "en", "es"] as const;

const phonePattern = /^\+?[0-9\s().-]{6,20}$/;

const requiredText = (min: number, max: number) =>
  z.string().trim().min(min, "tooShort").max(max, "tooLong");

const consent = z.boolean().refine((value) => value === true, "consentRequired");

/** Honeypot: must stay empty. Bots that fill it are silently discarded. */
const honeypot = z.string().max(0).optional().default("");

export const demoRequestSchema = z.object({
  organizationName: requiredText(2, 200),
  organizationType: z.enum(organizationTypes, "required"),
  city: requiredText(2, 100),
  estimatedStudentCount: z.enum(studentCounts, "required"),
  fullName: requiredText(2, 120),
  jobTitle: requiredText(2, 120),
  phone: z.string().trim().regex(phonePattern, "invalidPhone"),
  email: z.email("invalidEmail"),
  preferredLanguage: z.enum(preferredLanguages, "required"),
  message: z.string().trim().max(2000, "tooLong").optional().default(""),
  privacyConsent: consent,
  website: honeypot,
});

export type DemoRequestInput = z.input<typeof demoRequestSchema>;
export type DemoRequest = z.output<typeof demoRequestSchema>;

export const contactSchema = z.object({
  name: requiredText(2, 120),
  organization: z.string().trim().max(200, "tooLong").optional().default(""),
  phone: z.string().trim().regex(phonePattern, "invalidPhone"),
  email: z.email("invalidEmail"),
  subject: requiredText(2, 200),
  message: requiredText(10, 2000),
  privacyConsent: consent,
  website: honeypot,
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactMessage = z.output<typeof contactSchema>;

export interface FormApiResponse {
  ok: boolean;
  message: string;
}
