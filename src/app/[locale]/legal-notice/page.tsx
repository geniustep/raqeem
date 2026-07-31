import type { Metadata } from "next";
import Link from "next/link";
import { Building2, FileText } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { legalNoticePages } from "@/content/legal-notice-page";
import { locales, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { OG_IMAGE } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = legalNoticePages[locale];
  const path = "/legal-notice";
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
      title: content.title,
      description: content.description,
      images: [`${SITE_URL}${OG_IMAGE.url}`],
    },
  };
}

export default async function LegalNoticePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = legalNoticePages[locale];

  return (
    <>
      <section className="bg-brand-ivory py-16 lg:py-20">
        <Container className="max-w-4xl">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-navy text-white">
            <FileText aria-hidden="true" className="size-6" strokeWidth={2} />
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-navy-700/85">
            {content.description}
          </p>
          <p className="mt-4 text-sm text-brand-navy-700/65">{content.updated}</p>
          <p className="mt-8 rounded-2xl border border-brand-navy-100 bg-white p-5 leading-7 text-brand-navy-700/85">
            {content.notice}
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {content.sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-2xl border border-brand-navy-100 bg-white p-6"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-navy-50 text-brand-navy">
                  {index === 0 ? (
                    <Building2 aria-hidden="true" className="size-5" strokeWidth={2} />
                  ) : (
                    <FileText aria-hidden="true" className="size-5" strokeWidth={2} />
                  )}
                </span>
                <h2 className="mt-4 text-xl font-bold text-brand-navy">{section.title}</h2>
                <p className="mt-3 leading-8 text-brand-navy-700/85">{section.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-20">
        <Container className="max-w-4xl">
          <div className="rounded-3xl bg-brand-navy p-7 text-white sm:p-10">
            <h2 className="text-2xl font-bold">Genius Step SARL</h2>
            <p className="mt-4 leading-8 text-white/85">
              37 Rue 40 Aouama Zemmouri Lot 271, 90080 Tanger, Maroc
            </p>
            <p className="mt-2 text-white/85">contact@raqeem.ma</p>
            <Link
              href={`/${locale}/contact`}
              className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-brand-navy transition hover:bg-brand-ivory"
            >
              {content.contactAction}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
