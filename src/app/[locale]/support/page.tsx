import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { locales, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { OG_IMAGE } from "@/lib/metadata";
import { supportPages } from "@/content/support-page";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = supportPages[locale];
  const path = "/support";
  const url = `${SITE_URL}/${locale}${path}`;
  const languages: Record<string, string> = {};

  for (const supportedLocale of locales) {
    languages[supportedLocale] = `${SITE_URL}/${supportedLocale}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/ar${path}`;

  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: url, languages },
    openGraph: {
      title: content.title,
      description: content.description,
      url,
      type: "website",
      images: [{
        url: `${SITE_URL}${OG_IMAGE.url}`,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: "Raqeem",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [`${SITE_URL}${OG_IMAGE.url}`],
    },
  };
}

export default async function SupportPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = supportPages[locale];

  return (
    <section className="py-16 lg:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-navy">{content.title}</h1>
        <p className="mt-3 text-sm text-brand-navy-700/70">{content.updated}</p>
        <p className="mt-5 text-lg leading-8 text-brand-navy-700/85">{content.description}</p>

        <div className="mt-10 space-y-10">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-brand-navy">{section.title}</h2>
              <p className="mt-3 whitespace-pre-line leading-8 text-brand-navy-700/85">{section.text}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-navy-100 bg-white p-6">
          <h2 className="text-xl font-bold text-brand-navy">{content.contactLabel}</h2>
          <Link
            href={`/${locale}/contact`}
            className="mt-4 inline-flex rounded-xl bg-brand-navy px-5 py-3 font-semibold text-white"
          >
            {content.contactHrefLabel}
          </Link>
          <p className="mt-4 text-brand-navy-700/85">contact@raqeem.ma</p>
        </div>
      </Container>
    </section>
  );
}
