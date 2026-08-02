import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, CheckCircle2 } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { getGuide, guideIndexPages, guideSlugs } from "@/content/guide-catalog";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildLocalizedMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const homeLabels: Record<Locale, string> = {
  ar: "الرئيسية",
  fr: "Accueil",
  en: "Home",
  es: "Inicio",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = guideIndexPages[locale];

  return buildLocalizedMetadata({
    locale,
    path: "/guides",
    title: content.title,
    description: content.description,
  });
}

export default async function GuidesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = guideIndexPages[locale];

  return (
    <>
      <JsonLd
        data={
          breadcrumbJsonLd([
            { name: homeLabels[locale], url: `${SITE_URL}/${locale}` },
            { name: content.eyebrow, url: `${SITE_URL}/${locale}/guides` },
          ])
        }
      />

      <section className="bg-brand-ivory py-16 lg:py-24">
        <Container className="max-w-5xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal-200 bg-white px-4 py-2 text-sm font-semibold text-brand-teal-700">
            <BookOpen className="size-4" aria-hidden="true" />
            {content.eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-navy-700/85">
            {content.description}
          </p>
          <p className="mt-6 max-w-3xl rounded-2xl border border-brand-navy-100 bg-white p-5 leading-8 text-brand-navy-700/85">
            {content.intro}
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="max-w-5xl">
          <h2 className="text-2xl font-bold text-brand-navy">{content.listTitle}</h2>
          <div className="mt-8 grid gap-6">
            {guideSlugs.map((slug) => {
              const guide = getGuide(locale, slug);
              if (!guide) {
                return null;
              }

              return (
                <Link
                  key={slug}
                  href={`/guides/${slug}`}
                  className="group rounded-3xl border border-brand-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-teal-300 hover:shadow-lg sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-semibold text-brand-teal-700">{guide.category}</p>
                      <h2 className="mt-3 text-2xl font-bold text-brand-navy">{guide.title}</h2>
                      <p className="mt-4 max-w-3xl leading-8 text-brand-navy-700/80">
                        {guide.description}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-brand-navy-700/65">
                        <span>{guide.readingTime}</span>
                        <span>{guide.updatedLabel}</span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="size-6 shrink-0 text-brand-teal-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-teal-700">
                    <CheckCircle2 className="size-4" aria-hidden="true" />
                    {content.readLabel}
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pb-20 lg:pb-24">
        <Container className="max-w-5xl">
          <div className="rounded-3xl bg-brand-navy px-6 py-12 text-center text-white sm:px-10">
            <h2 className="text-3xl font-bold">{content.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/80">
              {content.ctaDescription}
            </p>
            <Link
              href="/demo"
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-brand-navy transition hover:bg-brand-ivory"
            >
              {content.ctaButton}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
