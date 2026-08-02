import type { CatalogGuideContent } from "@/content/guide-types";
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

type StageFourGuideSlug = (typeof stageFourGuideSlugs)[number];

export const guideSlugs = [...baseGuideSlugs, ...stageFourGuideSlugs] as const;

const stageFourGuides: Record<StageFourGuideSlug, Record<Locale, CatalogGuideContent>> = {
  "school-fees-collections-receipts": schoolFeesCollectionsReceiptsGuide,
  "governed-school-communication": governedSchoolCommunicationGuide,
};

function isStageFourGuideSlug(value: string): value is StageFourGuideSlug {
  return stageFourGuideSlugs.includes(value as StageFourGuideSlug);
}

export function getGuide(locale: Locale, slug: string): CatalogGuideContent | undefined {
  const baseGuide = getBaseGuide(locale, slug);
  if (baseGuide) {
    return baseGuide;
  }

  return isStageFourGuideSlug(slug) ? stageFourGuides[slug][locale] : undefined;
}

export { guideIndexPages };
export type { CatalogGuideContent };
