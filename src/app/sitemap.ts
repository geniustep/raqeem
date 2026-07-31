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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PATHS.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alternate) => [alternate, `${SITE_URL}/${alternate}${path}`]),
        ),
      },
    })),
  );
}
