import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { locales, type Locale } from "@/i18n/routing";
import { SITE_URL } from "./constants";

export type MetadataPageKey =
  | "home"
  | "solutions"
  | "features"
  | "schools"
  | "institutes"
  | "tutoringCenters"
  | "languageCenters"
  | "administration"
  | "teachers"
  | "parents"
  | "students"
  | "timetable"
  | "security"
  | "about"
  | "demo"
  | "contact"
  | "faq"
  | "privacy"
  | "terms";

interface BuildPageMetadataOptions {
  locale: Locale;
  page: MetadataPageKey;
  /** Path without the locale prefix, e.g. "/solutions" or "" for home. */
  path: string;
}

export const OG_IMAGE = {
  url: "/social/og-image.png",
  width: 1200,
  height: 630,
} as const;

export async function buildPageMetadata({
  locale,
  page,
  path,
}: BuildPageMetadataOptions): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const title = t(`${page}.title`);
  const description = t(`${page}.description`);
  const siteName = t("siteName");
  const url = `${SITE_URL}/${locale}${path}`;

  const languages: Record<string, string> = {};
  for (const supportedLocale of locales) {
    languages[supportedLocale] = `${SITE_URL}/${supportedLocale}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/ar${path}`;

  return {
    title: page === "home" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale,
      type: "website",
      images: [
        {
          url: `${SITE_URL}${OG_IMAGE.url}`,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${OG_IMAGE.url}`],
    },
  };
}
