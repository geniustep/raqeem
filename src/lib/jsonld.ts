import type { Locale } from "@/i18n/routing";
import { organizationIdentity } from "@/content/organization-identity";
import { APP_URL, BRAND, GOOGLE_PLAY_URL, SITE_URL, SOCIAL_LINKS } from "./constants";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const BRAND_ID = `${SITE_URL}/#brand`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SOFTWARE_ID = `${SITE_URL}/#software`;
const BRAND_ALIASES = [organizationIdentity.brandNameAr, organizationIdentity.brandName, "raqeem.ma"];

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
    legalName: organizationIdentity.legalName,
    alternateName: BRAND_ALIASES,
    description,
    disambiguatingDescription:
      "Genius Step SARL operates Raqeem (رقيم), the Moroccan education and school management software platform at raqeem.ma.",
    url: SITE_URL,
    email: organizationIdentity.email,
    telephone: organizationIdentity.telephone,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${BRAND.logo}`,
      width: BRAND.logoWidth,
      height: BRAND.logoHeight,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: organizationIdentity.address.streetAddress,
      addressLocality: organizationIdentity.address.addressLocality,
      postalCode: organizationIdentity.address.postalCode,
      addressCountry: organizationIdentity.address.addressCountry,
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Morocco commercial register",
      propertyID: "RC",
      value: organizationIdentity.registrationNumber,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: organizationIdentity.email,
        telephone: organizationIdentity.telephone,
        areaServed: organizationIdentity.serviceCountry,
        availableLanguage: organizationIdentity.availableLanguages,
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: organizationIdentity.email,
        telephone: organizationIdentity.whatsapp,
        areaServed: organizationIdentity.serviceCountry,
        availableLanguage: organizationIdentity.availableLanguages,
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    brand: { "@id": BRAND_ID },
    sameAs: verifiedSocialProfiles(),
  };
}

export function brandJsonLd({ name, description }: { name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Brand",
    "@id": BRAND_ID,
    name,
    alternateName: BRAND_ALIASES,
    description,
    disambiguatingDescription:
      "Raqeem (رقيم) is the Moroccan education management software brand published by Genius Step SARL at raqeem.ma.",
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND.logo}`,
    slogan: "Raqeem | رقيم",
  };
}

export function websiteJsonLd({ name, description }: { name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: BRAND.siteName,
    alternateName: BRAND_ALIASES,
    description,
    url: SITE_URL,
    inLanguage: organizationIdentity.availableLanguages,
    about: [{ "@id": BRAND_ID }, { "@id": SOFTWARE_ID }],
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function homePageJsonLd({
  name,
  description,
  locale,
}: {
  name: string;
  description: string;
  locale: Locale;
}) {
  const url = `${SITE_URL}/${locale}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    inLanguage: locale,
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": BRAND_ID }, { "@id": SOFTWARE_ID }, { "@id": ORGANIZATION_ID }],
    mainEntity: { "@id": SOFTWARE_ID },
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
    alternateName: BRAND_ALIASES,
    description,
    disambiguatingDescription:
      "Raqeem (رقيم) is an education and school operations software platform for private educational institutions in Morocco.",
    url: SITE_URL,
    sameAs: [APP_URL, GOOGLE_PLAY_URL],
    installUrl: GOOGLE_PLAY_URL,
    mainEntityOfPage: `${SITE_URL}/${locale}`,
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "SchoolManagementSoftware",
    applicationSuite: organizationIdentity.brandName,
    operatingSystem: "Web, Android, iOS, Windows",
    inLanguage: locale,
    brand: { "@id": BRAND_ID },
    provider: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function serviceJsonLd({
  name,
  description,
  url,
  inLanguage,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  inLanguage: Locale;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    serviceType,
    inLanguage,
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    provider: { "@id": ORGANIZATION_ID },
    brand: { "@id": BRAND_ID },
    isRelatedTo: { "@id": SOFTWARE_ID },
    mainEntityOfPage: `${url}#webpage`,
  };
}

export function organizationWebPageJsonLd({
  type,
  name,
  description,
  url,
  inLanguage,
}: {
  type: "AboutPage" | "ContactPage" | "WebPage";
  name: string;
  description: string;
  url: string;
  inLanguage: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    inLanguage,
    isPartOf: { "@id": WEBSITE_ID },
    about: [{ "@id": ORGANIZATION_ID }, { "@id": BRAND_ID }],
    mainEntity: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
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
  relatedServices = [],
}: {
  headline: string;
  description: string;
  url: string;
  inLanguage: Locale;
  datePublished: string;
  dateModified: string;
  citations?: string[];
  relatedServices?: string[];
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
    about:
      relatedServices.length > 0
        ? relatedServices.map((serviceUrl) => ({ "@id": `${serviceUrl}#service` }))
        : undefined,
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

export function faqPageJsonLd(
  items: Array<{ question: string; answer: string }>,
  page?: { url: string; inLanguage: Locale },
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": page ? `${page.url}#faq` : undefined,
    url: page?.url,
    inLanguage: page?.inLanguage,
    isPartOf: page ? { "@id": WEBSITE_ID } : undefined,
    mainEntityOfPage: page?.url,
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
