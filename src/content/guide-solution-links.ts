import { guideSlugs } from "@/content/guide-catalog";
import type { SolutionLandingSlug } from "@/content/solution-landing-pages";

export type CatalogGuideSlug = (typeof guideSlugs)[number];

const guideSolutionLinks: Record<
  CatalogGuideSlug,
  readonly SolutionLandingSlug[]
> = {
  "school-operations-platform": [
    "admissions-enrollment",
    "school-fees-collections",
    "school-communication",
    "attendance-absence",
  ],
  "choosing-school-management-system": [
    "admissions-enrollment",
    "school-fees-collections",
    "school-communication",
    "attendance-absence",
  ],
  "admission-to-student-record": ["admissions-enrollment"],
  "school-data-isolation": ["school-communication"],
  "school-fees-collections-receipts": ["school-fees-collections"],
  "governed-school-communication": ["school-communication"],
  "attendance-absence-parent-updates": [
    "attendance-absence",
    "school-communication",
  ],
  "roles-permissions-sensitive-actions": [
    "admissions-enrollment",
    "school-fees-collections",
    "school-communication",
    "attendance-absence",
  ],
  "protecting-school-data": [],
  "timetable-conflict-management": [],
  "migrating-from-excel": [
    "admissions-enrollment",
    "school-fees-collections",
  ],
  "multi-branch-school-management": [
    "admissions-enrollment",
    "school-fees-collections",
    "attendance-absence",
  ],
  "raqeem-and-massar": ["admissions-enrollment"],
  "mobile-and-desktop-school-management": [
    "school-communication",
    "attendance-absence",
  ],
  "cloud-school-management": [
    "admissions-enrollment",
    "school-fees-collections",
  ],
  "integrated-student-journey": [
    "admissions-enrollment",
    "school-fees-collections",
    "school-communication",
    "attendance-absence",
  ],
  "private-school-management-morocco": [
    "admissions-enrollment",
    "school-fees-collections",
    "school-communication",
    "attendance-absence",
  ],
  "logiciel-gestion-scolaire-maroc": [
    "admissions-enrollment",
    "school-fees-collections",
    "school-communication",
    "attendance-absence",
  ],
};

export function getGuideSolutionSlugs(
  slug: string,
): readonly SolutionLandingSlug[] {
  return guideSlugs.includes(slug as CatalogGuideSlug)
    ? guideSolutionLinks[slug as CatalogGuideSlug]
    : [];
}
