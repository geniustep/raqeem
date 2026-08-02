import type { GuideContent } from "@/content/guides";

export type CatalogGuideContent = Omit<GuideContent, "slug"> & {
  slug: string;
};
