import type { MetadataRoute } from "next";
import { getGuide, guideSlugs } from "@/content/guide-catalog";
import {
  expandedSolutionSlugs,
  getExpandedSolutionLanding,
} from "@/content/solution-expansion-pages";
import {
  getSolutionLanding,
  solutionLandingSlugs,
} from "@/content/solution-landing-pages";
import { locales, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";

const SEO_RELEASE_DATE = "2026-08-03";
const FAQ_RELEASE_DATE = "2026-08-18";
const APP_RELEASE_DATE = "2026-08-13";
const COMMERCIAL_RELEASE_DATE = "2026-08-18";
const HOME_RELEASE_DATE = "2026-08-21";
const ENTITY_RELEASE_DATE = "2026-08-18";
const TRUST_RELEASE_DATE = "2026-07-31";
const TRUST_TRANSLATION_RELEASE_DATE = "2026-08-21";

const STATIC_PATHS = [
  "",
  "/app",
  "/platform",
  "/solutions",
  "/features",
  "/institutions/schools",
  "/institutions/institutes",
  "/institutions/tutoring-centers",
  "/institutions/language-centers",
  "/roles/director",
  "/roles/administration",
  "/roles/finance",
  "/roles/teachers",
  "/roles/parents",
  "/roles/students",
  "/timetable",
  "/security",
  "/about",
  "/demo",
  "/contact",
  "/faq",
  "/guides",
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
] as const;

const COMMERCIAL_PATHS = new Set<string>([
  "/platform",
  "/solutions",
  "/features",
  "/demo",
  "/roles/director",
  "/roles/finance",
]);
const ENTITY_PATHS = new Set<string>(["/about", "/contact", "/legal-notice"]);
const TRUST_PATHS = new Set<string>([
  "/privacy",
  "/terms",
  "/support",
  "/data-deletion",
  "/compliance",
  "/privacy-center",
  "/trust-center",
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
]);
const TRANSLATED_TRUST_POLICY_PATHS = new Set<string>([
  "/business-continuity",
  "/disaster-recovery",
  "/incident-response",
  "/vulnerability-disclosure",
  "/security-contact",
  "/support-policy",
  "/maintenance-policy",
  "/security-whitepaper",
  "/responsible-ai",
]);

const PATHS = [
  ...STATIC_PATHS,
  ...expandedSolutionSlugs.map((slug) => `/solutions/${slug}`),
  ...solutionLandingSlugs.map((slug) => `/solutions/${slug}`),
  ...guideSlugs.map((slug) => `/guides/${slug}`),
];

function languageAlternates(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])),
    "x-default": `${SITE_URL}/ar${path}`,
  };
}

function lastModifiedFor(path: string, locale: Locale): string {
  if (path === "") return HOME_RELEASE_DATE;
  if (path === "/faq") return FAQ_RELEASE_DATE;
  if (path === "/app") return APP_RELEASE_DATE;
  if (TRANSLATED_TRUST_POLICY_PATHS.has(path)) return TRUST_TRANSLATION_RELEASE_DATE;
  if (COMMERCIAL_PATHS.has(path)) return COMMERCIAL_RELEASE_DATE;
  if (path.startsWith("/solutions/")) {
    const slug = path.slice("/solutions/".length);
    return (
      getExpandedSolutionLanding(locale, slug)?.updatedAt ??
      getSolutionLanding(locale, slug)?.updatedAt ??
      SEO_RELEASE_DATE
    );
  }
  if (path.startsWith("/guides/")) {
    const slug = path.slice("/guides/".length);
    return getGuide(locale, slug)?.updatedAt ?? SEO_RELEASE_DATE;
  }
  if (ENTITY_PATHS.has(path)) return ENTITY_RELEASE_DATE;
  return TRUST_PATHS.has(path) ? TRUST_RELEASE_DATE : SEO_RELEASE_DATE;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: lastModifiedFor(path, locale),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority:
        path === ""
          ? 1
          : path === "/solutions" || path === "/platform" || path === "/guides"
            ? 0.9
            : path.startsWith("/solutions/")
              ? 0.85
              : path.startsWith("/guides/") || path === "/trust-center"
                ? 0.8
                : 0.7,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
