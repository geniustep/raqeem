import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { compliancePages } from "@/content/compliance-page";
import { locales, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { OG_IMAGE } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = compliancePages[locale];
  const path = "/compliance";
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

export default async function CompliancePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = compliancePages[locale];

  return (
    <>
      <section className="bg-brand-ivory py-16 lg:py-20">
        <Container className="max-w-4xl">
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
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
        <Container className="max-w-4xl">
          <div className="space-y-6">
            {content.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-brand-navy-100 bg-white p-6 sm:p-7"
              >
                <h2 className="text-xl font-bold text-brand-navy">{section.title}</h2>
                <p className="mt-3 leading-8 text-brand-navy-700/85">{section.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-20">
        <Container className="max-w-4xl">
          <div className="flex flex-col gap-4 rounded-3xl bg-brand-navy p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <p className="max-w-2xl leading-8 text-white/85">contact@raqeem.ma</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex w-fit rounded-xl bg-white px-5 py-3 font-semibold text-brand-navy transition hover:bg-brand-ivory"
            >
              Contact
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
