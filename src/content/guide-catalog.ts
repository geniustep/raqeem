import type { CatalogGuideContent } from "@/content/guide-types";
import {
  attendanceAbsenceParentUpdatesGuide,
  rolesPermissionsSensitiveActionsGuide,
} from "@/content/guides/attendance-and-permissions";
import {
  migratingFromExcelGuide,
  multiBranchSchoolManagementGuide,
  protectingSchoolDataGuide,
  timetableConflictManagementGuide,
} from "@/content/guides/data-timetable-migration-branches";
import { governedSchoolCommunicationGuide } from "@/content/guides/governed-school-communication";
import { schoolFeesCollectionsReceiptsGuide } from "@/content/guides/school-fees-collections-receipts";
import {
  getGuide as getBaseGuide,
  guideIndexPages,
  guideSlugs as baseGuideSlugs,
} from "@/content/guides";
import type { Locale } from "@/i18n/routing";

export const stageFourGuideSlugs = [
  "school-fees-collections-receipts",
  "governed-school-communication",
] as const;

export const stageSixGuideSlugs = [
  "attendance-absence-parent-updates",
  "roles-permissions-sensitive-actions",
  "protecting-school-data",
  "timetable-conflict-management",
  "migrating-from-excel",
  "multi-branch-school-management",
] as const;

type StageFourGuideSlug = (typeof stageFourGuideSlugs)[number];
type StageSixGuideSlug = (typeof stageSixGuideSlugs)[number];

export const guideSlugs = [
  ...baseGuideSlugs,
  ...stageFourGuideSlugs,
  ...stageSixGuideSlugs,
] as const;

const stageFourGuides: Record<StageFourGuideSlug, Record<Locale, CatalogGuideContent>> = {
  "school-fees-collections-receipts": schoolFeesCollectionsReceiptsGuide,
  "governed-school-communication": governedSchoolCommunicationGuide,
};

const stageSixGuides: Record<StageSixGuideSlug, Record<Locale, CatalogGuideContent>> = {
  "attendance-absence-parent-updates": attendanceAbsenceParentUpdatesGuide,
  "roles-permissions-sensitive-actions": rolesPermissionsSensitiveActionsGuide,
  "protecting-school-data": protectingSchoolDataGuide,
  "timetable-conflict-management": timetableConflictManagementGuide,
  "migrating-from-excel": migratingFromExcelGuide,
  "multi-branch-school-management": multiBranchSchoolManagementGuide,
};

function isStageFourGuideSlug(value: string): value is StageFourGuideSlug {
  return stageFourGuideSlugs.includes(value as StageFourGuideSlug);
}

function isStageSixGuideSlug(value: string): value is StageSixGuideSlug {
  return stageSixGuideSlugs.includes(value as StageSixGuideSlug);
}

export function getGuide(locale: Locale, slug: string): CatalogGuideContent | undefined {
  const baseGuide = getBaseGuide(locale, slug);
  if (baseGuide) {
    return baseGuide;
  }

  if (isStageFourGuideSlug(slug)) {
    return stageFourGuides[slug][locale];
  }

  return isStageSixGuideSlug(slug) ? stageSixGuides[slug][locale] : undefined;
}

export { guideIndexPages };
export type { CatalogGuideContent };
