import type { Locale } from "@/i18n/routing";
import { BRAND, SITE_URL, SOCIAL_LINKS } from "./constants";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SOFTWARE_ID = `${SITE_URL}/#software`;

function verifiedSocialProfiles(): string[] | undefined {
  const profiles = Object.values(SOCIAL_LINKS).filter((url): url is string => Boolean(url));
  return profiles.length > 0 ? profiles : undefined;
}

export function organizationJsonLd({ name, description }: { name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name,
    alternateName: ["رقيم", "Raqeem"],
    description,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${BRAND.logo}`,
      width: BRAND.logoWidth,
      height: BRAND.logoHeight,
    },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    sameAs: verifiedSocialProfiles(),
  };
}

export function websiteJsonLd({ name, description }: { name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name,
    description,
    url: SITE_URL,
    inLanguage: ["ar", "fr", "en", "es"],
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function softwareApplicationJsonLd({
  name,
  description,
  locale,
}: {
  name: string;
  description: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_ID,
    name,
    alternateName: ["رقيم", "Raqeem"],
    description,
    url: SITE_URL,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, Android, iOS, Windows",
    inLanguage: locale,
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function articleJsonLd({
  headline,
  description,
  url,
  inLanguage,
  datePublished,
  dateModified,
  citations = [],
}: {
  headline: string;
  description: string;
  url: string;
  inLanguage: Locale;
  datePublished: string;
  dateModified: string;
  citations?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: url,
    inLanguage,
    datePublished,
    dateModified,
    image: `${SITE_URL}/social/og-image.png`,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
    isAccessibleForFree: true,
    citation: citations.length > 0 ? citations : undefined,
  };
}

export function itemListJsonLd({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: Array<{ name: string; url: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url,
    numberOfItems: items.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function faqPageJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
