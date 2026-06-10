import { SITE_URL } from "./constants";

export function organizationJsonLd({ name, description }: { name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    alternateName: ["رقيم", "Raqeem"],
    description,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/raqeem-logo.png`,
  };
}

export function websiteJsonLd({ name, description }: { name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    description,
    url: SITE_URL,
    inLanguage: ["ar", "fr", "en", "es"],
  };
}

export function softwareApplicationJsonLd({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: SITE_URL,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, Android, iOS",
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
