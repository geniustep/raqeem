import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { locales, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { OG_IMAGE } from "@/lib/metadata";
import { dataDeletionPolicies } from "@/content/data-deletion-policy";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const policy = dataDeletionPolicies[locale];
  const path = "/data-deletion";
  const url = `${SITE_URL}/${locale}${path}`;

  const languages: Record<string, string> = {};
  for (const supportedLocale of locales) {
    languages[supportedLocale] = `${SITE_URL}/${supportedLocale}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/ar${path}`;

  return {
    title: policy.title,
    description: policy.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: policy.title,
      description: policy.description,
      url,
      type: "website",
      images: [
        {
          url: `${SITE_URL}${OG_IMAGE.url}`,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: "Raqeem",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: policy.title,
      description: policy.description,
      images: [`${SITE_URL}${OG_IMAGE.url}`],
    },
  };
}

export default async function DataDeletionPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const policy = dataDeletionPolicies[locale];

  return (
    <section className="py-16 lg:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-navy">
          {policy.title}
        </h1>
        <p className="mt-3 text-sm text-brand-navy-700/70">{policy.updated}</p>
        <div className="mt-10 space-y-10">
          {policy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-brand-navy">{section.title}</h2>
              <p className="mt-3 whitespace-pre-line leading-8 text-brand-navy-700/85">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
