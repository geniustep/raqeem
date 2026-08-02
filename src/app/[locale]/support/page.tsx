import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { GuideLinksSection } from "@/components/guides/GuideLinksSection";
import { CorePageSummary } from "@/components/sections/CorePageSummary";
import { Container } from "@/components/ui/Container";
import { getCorePageContent } from "@/content/core-pages";
import { supportPages } from "@/content/support-page";
import type { Locale } from "@/i18n/routing";
import { buildLocalizedMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const relatedGuideSlugs = [
  "school-operations-platform",
  "choosing-school-management-system",
] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const fallback = supportPages[locale];
  const content = getCorePageContent(locale, "support") ?? fallback;

  return buildLocalizedMetadata({
    locale,
    path: "/support",
    title: content.title,
    description: content.description,
  });
}

export default async function SupportPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = supportPages[locale];

  return (
    <>
      <section className="bg-brand-ivory py-16 lg:py-20">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-navy">
            {content.title}
          </h1>
          <p className="mt-3 text-sm text-brand-navy-700/70">{content.updated}</p>
          <p className="mt-5 text-lg leading-8 text-brand-navy-700/85">
            {content.description}
          </p>
        </Container>
      </section>

      <CorePageSummary locale={locale} page="support" />

      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-brand-navy">{section.title}</h2>
                <p className="mt-3 whitespace-pre-line leading-8 text-brand-navy-700/85">
                  {section.text}
                </p>
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

      <GuideLinksSection locale={locale} slugs={relatedGuideSlugs} />
    </>
  );
}
