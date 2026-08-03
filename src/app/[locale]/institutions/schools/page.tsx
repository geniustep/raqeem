import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { DetailPage } from "@/components/sections/DetailPage";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const relatedSolutionSlugs = [
  "admissions-enrollment",
  "school-fees-collections",
  "school-communication",
  "attendance-absence",
] as const;

const relatedGuideSlugs = [
  "integrated-student-journey",
  "raqeem-and-massar",
  "admission-to-student-record",
  "school-fees-collections-receipts",
  "attendance-absence-parent-updates",
  "mobile-and-desktop-school-management",
  "cloud-school-management",
  "migrating-from-excel",
  "multi-branch-school-management",
  "school-data-isolation",
] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "schools", path: "/institutions/schools" });
}

export default async function SchoolsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <DetailPage
      locale={locale}
      namespace="pages.institutions.schools"
      path="/institutions/schools"
      intentKey="schools"
      relatedSolutionSlugs={relatedSolutionSlugs}
      relatedGuideSlugs={relatedGuideSlugs}
    />
  );
}
