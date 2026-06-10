import { defineRouting } from "next-intl/routing";

export const locales = ["ar", "fr", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const localeDirections: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  fr: "ltr",
  en: "ltr",
  es: "ltr",
};

export const localeNames: Record<Locale, string> = {
  ar: "العربية",
  fr: "Français",
  en: "English",
  es: "Español",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "ar",
  localePrefix: "always",
  // Arabic is the canonical default: "/" always lands on /ar regardless of
  // the browser's Accept-Language header.
  localeDetection: false,
});
