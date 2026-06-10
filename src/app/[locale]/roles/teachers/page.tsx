import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { DetailPage } from "@/components/sections/DetailPage";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "teachers", path: "/roles/teachers" });
}

export default async function TeachersPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <DetailPage locale={locale} namespace="pages.rolesPages.teachers" path="/roles/teachers" />
  );
}
