import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { faqItemsByLocale } from "@/content/faq-content";
import { guideIndexPages } from "@/content/guide-catalog";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { faqPageJsonLd } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "faq", path: "/faq" });
}

export default async function FaqPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const guides = guideIndexPages[locale];
  const faqItems = faqItemsByLocale[locale];
  const url = `${SITE_URL}/${locale}/faq`;

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems, { url, inLanguage: locale })} />
      <FaqSection />
      <section className="pb-16">
        <Container className="max-w-4xl">
          <Link
            href="/guides"
            className="group flex items-center justify-between gap-5 rounded-2xl border border-brand-navy-100 bg-brand-ivory p-6 transition hover:border-brand-teal-300 hover:shadow-md"
          >
            <div>
              <p className="text-sm font-semibold text-brand-teal-700">{guides.eyebrow}</p>
              <p className="mt-2 text-xl font-bold text-brand-navy">{guides.directoryLinkLabel}</p>
              <p className="mt-2 leading-7 text-brand-navy-700/75">{guides.description}</p>
            </div>
            <BookOpen
              className="size-7 shrink-0 text-brand-teal-700 transition group-hover:scale-105"
              aria-hidden="true"
            />
          </Link>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
