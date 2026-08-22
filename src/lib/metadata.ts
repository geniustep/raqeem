import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getCorePageContent } from "@/content/core-pages";
import { getEntityProfile } from "@/content/entity-profile";
import { locales, type Locale } from "@/i18n/routing";
import { BRAND, SITE_URL } from "./constants";

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

interface BuildLocalizedMetadataOptions {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
}

export const OG_IMAGE = {
  url: "/social/og-image.png",
  width: 1200,
  height: 630,
} as const;

function localizedAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const supportedLocale of locales) {
    languages[supportedLocale] = `${SITE_URL}/${supportedLocale}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/ar${path}`;
  return languages;
}

export function buildLocalizedMetadata({
  locale,
  path,
  title,
  description,
  type = "website",
}: BuildLocalizedMetadataOptions): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: localizedAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.siteName,
      locale,
      type,
      images: [
        {
          url: `${SITE_URL}${OG_IMAGE.url}`,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: title,
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

export async function buildPageMetadata({
  locale,
  page,
  path,
}: BuildPageMetadataOptions): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const entity = getEntityProfile(locale);
  const coreContent = getCorePageContent(locale, page);
  const title =
    page === "home" ? entity.descriptor : (coreContent?.title ?? t(`${page}.title`));
  const description =
    page === "home" ? entity.description : (coreContent?.description ?? t(`${page}.description`));
  const metadata = buildLocalizedMetadata({ locale, path, title, description });

  if (page === "home") {
    metadata.title = { absolute: title };
  }

  return metadata;
}
