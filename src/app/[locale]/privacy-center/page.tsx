import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { privacyCenterPages } from "@/content/privacy-center-page";
import { locales, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { OG_IMAGE } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = privacyCenterPages[locale];
  const path = "/privacy-center";
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
      images: [{ url: `${SITE_URL}${OG_IMAGE.url}`, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: "Raqeem" }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [`${SITE_URL}${OG_IMAGE.url}`],
    },
  };
}

export default async function PrivacyCenterPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = privacyCenterPages[locale];

  return (
    <>
      <section className="bg-brand-ivory py-16 lg:py-20">
        <Container className="max-w-4xl">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-navy text-white">
            <ShieldCheck aria-hidden="true" className="size-6" strokeWidth={2} />
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">{content.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-navy-700/85">{content.description}</p>
          <p className="mt-4 text-sm text-brand-navy-700/65">{content.updated}</p>
          <p className="mt-8 rounded-2xl border border-brand-navy-100 bg-white p-5 leading-8 text-brand-navy-700/85">{content.intro}</p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {content.links.map((item) => (
              <Link key={item.href} href={`/${locale}${item.href}`} className="group rounded-2xl border border-brand-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md">
                <span className="flex items-start justify-between gap-4">
                  <span>
                    <span className="block text-xl font-bold text-brand-navy">{item.title}</span>
                    <span className="mt-3 block leading-8 text-brand-navy-700/85">{item.description}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand-navy-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-brand-navy p-7 text-white sm:p-10">
            <h2 className="text-2xl font-bold">{content.contactTitle}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/85">{content.contactText}</p>
            <Link href={`/${locale}/contact`} className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-brand-navy transition hover:bg-brand-ivory">
              {content.contactAction}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
