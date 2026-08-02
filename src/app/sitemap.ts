import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";

const PATHS = [
  "",
  "/solutions",
  "/features",
  "/institutions/schools",
  "/institutions/institutes",
  "/institutions/tutoring-centers",
  "/institutions/language-centers",
  "/roles/administration",
  "/roles/teachers",
  "/roles/parents",
  "/roles/students",
  "/timetable",
  "/security",
  "/about",
  "/demo",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/support",
  "/data-deletion",
  "/compliance",
  "/privacy-center",
  "/trust-center",
  "/legal-notice",
  "/cookies",
  "/accessibility",
  "/child-parent-data-notice",
  "/data-processing-agreement",
  "/subprocessors",
  "/data-retention",
  "/backup-recovery",
  "/service-status",
  "/service-level-agreement",
  "/business-continuity",
  "/disaster-recovery",
  "/incident-response",
  "/vulnerability-disclosure",
  "/security-contact",
  "/support-policy",
  "/maintenance-policy",
  "/security-whitepaper",
  "/responsible-ai",
];

function languageAlternates(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]),
    ),
    "x-default": `${SITE_URL}/ar${path}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/trust-center" ? 0.8 : 0.7,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
