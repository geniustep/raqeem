import type { CatalogGuideSlug } from "@/content/guide-solution-links";
import type { SolutionLandingSlug } from "@/content/solution-landing-pages";
import type { Locale } from "@/i18n/routing";

const allowedGuideSlugs = [
  "school-operations-platform",
  "choosing-school-management-system",
  "admission-to-student-record",
  "school-data-isolation",
  "school-fees-collections-receipts",
  "governed-school-communication",
  "attendance-absence-parent-updates",
  "roles-permissions-sensitive-actions",
  "protecting-school-data",
  "timetable-conflict-management",
  "migrating-from-excel",
  "multi-branch-school-management",
  "raqeem-and-massar",
  "mobile-and-desktop-school-management",
  "cloud-school-management",
  "integrated-student-journey",
] as const satisfies readonly CatalogGuideSlug[];

const allowedSolutionSlugs = [
  "admissions-enrollment",
  "school-fees-collections",
  "school-communication",
  "attendance-absence",
] as const satisfies readonly SolutionLandingSlug[];

export interface ConversionAttribution {
  source: "guide" | "solution" | "site";
  guideSlug?: CatalogGuideSlug;
  solutionSlug?: SolutionLandingSlug;
}

function isGuideSlug(value: string | null): value is CatalogGuideSlug {
  return value !== null && allowedGuideSlugs.includes(value as CatalogGuideSlug);
}

function isSolutionSlug(value: string | null): value is SolutionLandingSlug {
  return value !== null && allowedSolutionSlugs.includes(value as SolutionLandingSlug);
}

export function readConversionAttribution(search: string): ConversionAttribution {
  const params = new URLSearchParams(search);
  const source = params.get("source");
  const guideSlug = params.get("guide");
  const solutionSlug = params.get("solution");

  if (source === "solution" && isSolutionSlug(solutionSlug)) {
    return {
      source: "solution",
      solutionSlug,
      guideSlug: isGuideSlug(guideSlug) ? guideSlug : undefined,
    };
  }

  if (source === "guide" && isGuideSlug(guideSlug)) {
    return {
      source: "guide",
      guideSlug,
      solutionSlug: isSolutionSlug(solutionSlug) ? solutionSlug : undefined,
    };
  }

  return { source: "site" };
}

export function buildGuideToSolutionHref(
  locale: Locale,
  solutionSlug: SolutionLandingSlug,
  guideSlug: string,
): string {
  const params = new URLSearchParams({ source: "guide", solution: solutionSlug });

  if (isGuideSlug(guideSlug)) {
    params.set("guide", guideSlug);
  }

  return `/${locale}/solutions/${solutionSlug}?${params.toString()}`;
}

export function buildGuideDemoHref(locale: Locale, guideSlug: string): string {
  const params = new URLSearchParams({ source: "guide" });

  if (isGuideSlug(guideSlug)) {
    params.set("guide", guideSlug);
  }

  return `/${locale}/demo?${params.toString()}`;
}

export function buildSolutionDemoHref(
  locale: Locale,
  solutionSlug: SolutionLandingSlug,
  guideSlug?: CatalogGuideSlug,
): string {
  const params = new URLSearchParams({
    source: "solution",
    solution: solutionSlug,
  });

  if (guideSlug) {
    params.set("guide", guideSlug);
  }

  return `/${locale}/demo?${params.toString()}`;
}
