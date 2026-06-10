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
  return buildPageMetadata({ locale, page: "administration", path: "/roles/administration" });
}

export default async function AdministrationPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <DetailPage
      locale={locale}
      namespace="pages.rolesPages.administration"
      path="/roles/administration"
    />
  );
}
