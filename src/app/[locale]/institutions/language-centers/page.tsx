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
  return buildPageMetadata({
    locale,
    page: "languageCenters",
    path: "/institutions/language-centers",
  });
}

export default async function LanguageCentersPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <DetailPage
      locale={locale}
      namespace="pages.institutions.languageCenters"
      path="/institutions/language-centers"
    />
  );
}
