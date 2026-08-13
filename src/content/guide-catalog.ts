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
import {
  cloudSchoolManagementGuide,
  integratedStudentJourneyGuide,
  mobileAndDesktopSchoolManagementGuide,
  raqeemAndMassarGuide,
} from "@/content/guides/local-context-and-platforms";
import {
  privateSchoolManagementMoroccoGuide,
  schoolManagementSoftwareMoroccoGuide,
} from "@/content/guides/morocco-school-management-search";
import { schoolFeesCollectionsReceiptsGuide } from "@/content/guides/school-fees-collections-receipts";
import {
  getGuide as getBaseGuide,
  guideIndexPages,
  guideSlugs as baseGuideSlugs,
} from "@/content/guides";
import type { Locale } from "@/i18n/routing";

export const stageFourGuideSlugs = ["school-fees-collections-receipts", "governed-school-communication"] as const;
export const stageSixGuideSlugs = ["attendance-absence-parent-updates", "roles-permissions-sensitive-actions", "protecting-school-data", "timetable-conflict-management", "migrating-from-excel", "multi-branch-school-management"] as const;
export const stageSevenGuideSlugs = ["raqeem-and-massar", "mobile-and-desktop-school-management", "cloud-school-management", "integrated-student-journey"] as const;
export const searchGuideSlugs = ["private-school-management-morocco", "logiciel-gestion-scolaire-maroc"] as const;

type StageFourGuideSlug = (typeof stageFourGuideSlugs)[number];
type StageSixGuideSlug = (typeof stageSixGuideSlugs)[number];
type StageSevenGuideSlug = (typeof stageSevenGuideSlugs)[number];
type SearchGuideSlug = (typeof searchGuideSlugs)[number];

export const guideSlugs = [...baseGuideSlugs, ...stageFourGuideSlugs, ...stageSixGuideSlugs, ...stageSevenGuideSlugs, ...searchGuideSlugs] as const;

const stageFourGuides: Record<StageFourGuideSlug, Record<Locale, CatalogGuideContent>> = { "school-fees-collections-receipts": schoolFeesCollectionsReceiptsGuide, "governed-school-communication": governedSchoolCommunicationGuide };
const stageSixGuides: Record<StageSixGuideSlug, Record<Locale, CatalogGuideContent>> = { "attendance-absence-parent-updates": attendanceAbsenceParentUpdatesGuide, "roles-permissions-sensitive-actions": rolesPermissionsSensitiveActionsGuide, "protecting-school-data": protectingSchoolDataGuide, "timetable-conflict-management": timetableConflictManagementGuide, "migrating-from-excel": migratingFromExcelGuide, "multi-branch-school-management": multiBranchSchoolManagementGuide };
const stageSevenGuides: Record<StageSevenGuideSlug, Record<Locale, CatalogGuideContent>> = { "raqeem-and-massar": raqeemAndMassarGuide, "mobile-and-desktop-school-management": mobileAndDesktopSchoolManagementGuide, "cloud-school-management": cloudSchoolManagementGuide, "integrated-student-journey": integratedStudentJourneyGuide };
const searchGuides: Record<SearchGuideSlug, Record<Locale, CatalogGuideContent>> = { "private-school-management-morocco": privateSchoolManagementMoroccoGuide, "logiciel-gestion-scolaire-maroc": schoolManagementSoftwareMoroccoGuide };

function isStageFourGuideSlug(value: string): value is StageFourGuideSlug { return stageFourGuideSlugs.includes(value as StageFourGuideSlug); }
function isStageSixGuideSlug(value: string): value is StageSixGuideSlug { return stageSixGuideSlugs.includes(value as StageSixGuideSlug); }
function isStageSevenGuideSlug(value: string): value is StageSevenGuideSlug { return stageSevenGuideSlugs.includes(value as StageSevenGuideSlug); }
function isSearchGuideSlug(value: string): value is SearchGuideSlug { return searchGuideSlugs.includes(value as SearchGuideSlug); }

export function getGuide(locale: Locale, slug: string): CatalogGuideContent | undefined {
  const baseGuide = getBaseGuide(locale, slug);
  if (baseGuide) return baseGuide;
  if (isStageFourGuideSlug(slug)) return stageFourGuides[slug][locale];
  if (isStageSixGuideSlug(slug)) return stageSixGuides[slug][locale];
  if (isStageSevenGuideSlug(slug)) return stageSevenGuides[slug][locale];
  return isSearchGuideSlug(slug) ? searchGuides[slug][locale] : undefined;
}

export { guideIndexPages };
export type { CatalogGuideContent };
