import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { DetailPage } from "@/components/sections/DetailPage";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const relatedSolutionSlugs = ["school-communication", "attendance-absence"] as const;

const relatedGuideSlugs = ["school-operations-platform", "school-data-isolation"] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "students", path: "/roles/students" });
}

export default async function StudentsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <DetailPage
      locale={locale}
      namespace="pages.rolesPages.students"
      path="/roles/students"
      intentKey="students"
      relatedSolutionSlugs={relatedSolutionSlugs}
      relatedGuideSlugs={relatedGuideSlugs}
    />
  );
}
