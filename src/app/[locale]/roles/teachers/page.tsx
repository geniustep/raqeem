import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { DetailPage } from "@/components/sections/DetailPage";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const relatedGuideSlugs = [
  "governed-school-communication",
  "attendance-absence-parent-updates",
  "timetable-conflict-management",
  "roles-permissions-sensitive-actions",
  "school-data-isolation",
] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "teachers", path: "/roles/teachers" });
}

export default async function TeachersPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <DetailPage
      locale={locale}
      namespace="pages.rolesPages.teachers"
      path="/roles/teachers"
      intentKey="teachers"
      relatedGuideSlugs={relatedGuideSlugs}
    />
  );
}
