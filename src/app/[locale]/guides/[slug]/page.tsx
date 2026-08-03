import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, BookOpen, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { GuideAnalytics } from "@/components/guides/GuideAnalytics";
import { GuideDemoLink } from "@/components/guides/GuideDemoLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { SolutionLinksSection } from "@/components/solutions/SolutionLinksSection";
import { Container } from "@/components/ui/Container";
import { getGuide, guideIndexPages, guideSlugs } from "@/content/guide-catalog";
import { getGuideSolutionSlugs } from "@/content/guide-solution-links";
import { getGuideTopic } from "@/content/guide-topics";
import { getGuideTrust } from "@/content/guide-trust";
import { Link } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/jsonld";
import { buildLocalizedMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

const homeLabels: Record<Locale, string> = {
  ar: "الرئيسية",
  fr: "Accueil",
  en: "Home",
  es: "Inicio",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => guideSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(locale, slug);

  if (!guide) {
    return {};
  }

  return buildLocalizedMetadata({
    locale,
    path: `/guides/${slug}`,
    title: guide.title,
    description: guide.description,
    type: "article",
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const guide = getGuide(locale, slug);

  if (!guide) {
    notFound();
  }

  setRequestLocale(locale);
  const index = guideIndexPages[locale];
  const trust = getGuideTrust(locale, slug);
  const topic = getGuideTopic(locale, slug);
  const topicGuides =
    topic?.slugs.flatMap((topicSlug) => {
      if (topicSlug === slug) {
        return [];
      }

      const topicGuide = getGuide(locale, topicSlug);
      return topicGuide ? [{ slug: topicSlug, guide: topicGuide }] : [];
    }) ?? [];
  const solutionSlugs = getGuideSolutionSlugs(slug);
  const solutionUrls = solutionSlugs.map(
    (solutionSlug) => `${SITE_URL}/${locale}/solutions/${solutionSlug}`,
  );
  const url = `${SITE_URL}/${locale}/guides/${slug}`;

  return (
    <>
      <GuideAnalytics locale={locale} slug={slug} />
      <JsonLd
        data={
          articleJsonLd({
            headline: guide.title,
            description: guide.description,
            url,
            inLanguage: locale,
            datePublished: guide.publishedAt,
            dateModified: guide.updatedAt,
            citations: trust.sources.map((source) => source.href),
            relatedServices: solutionUrls,
          })
        }
      />
      <JsonLd data={faqPageJsonLd(guide.faq)} />
      <JsonLd
        data={
          breadcrumbJsonLd([
            { name: homeLabels[locale], url: `${SITE_URL}/${locale}` },
            { name: index.eyebrow, url: `${SITE_URL}/${locale}/guides` },
            { name: guide.title, url },
          ])
        }
      />

      <article>
        <header className="bg-brand-ivory py-16 lg:py-24">
          <Container className="max-w-4xl">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-700 transition hover:text-brand-teal-600"
            >
              <BookOpen className="size-4" aria-hidden="true" />
              {index.eyebrow}
            </Link>
            <p className="mt-6 text-sm font-semibold text-brand-teal-700">{guide.category}</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-navy-700/85">{guide.description}</p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-brand-navy-700/65">
              <span>{guide.readingTime}</span>
              <time dateTime={guide.updatedAt}>{guide.updatedLabel}</time>
            </div>
            <dl className="mt-6 grid gap-3 rounded-2xl border border-brand-navy-100 bg-white/70 p-5 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-brand-navy-700/65">{trust.authorLabel}</dt>
                <dd className="mt-1 font-bold text-brand-navy">{trust.authorName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-navy-700/65">{trust.reviewerLabel}</dt>
                <dd className="mt-1 font-bold text-brand-navy">{trust.reviewerName}</dd>
              </div>
            </dl>
          </Container>
        </header>

        <Container className="max-w-4xl py-14 lg:py-20">
          <section className="rounded-3xl border border-brand-teal-200 bg-brand-teal-50/60 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-brand-navy">{guide.directAnswerTitle}</h2>
            <p className="mt-4 text-lg leading-9 text-brand-navy-700/90">{guide.directAnswer}</p>
          </section>

          <section className="mt-8 rounded-3xl border border-brand-navy-100 bg-white p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-teal-50 text-brand-teal-700">
                <ShieldCheck className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-brand-navy">{trust.transparencyTitle}</h2>
                <p className="mt-3 leading-8 text-brand-navy-700/85">{trust.transparencyText}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                  <Link href="/trust-center" className="text-brand-teal-700 hover:text-brand-teal-600">
                    {trust.methodologyLinkLabel}
                  </Link>
                  <Link href="/about" className="text-brand-teal-700 hover:text-brand-teal-600">
                    {trust.aboutLinkLabel}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-14 space-y-14">
            {guide.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-9 text-brand-navy-700/85">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.points ? (
                  <ul className="mt-6 space-y-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 leading-8 text-brand-navy-700/85">
                        <CheckCircle2 className="mt-1 size-5 shrink-0 text-brand-teal-700" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-14 rounded-3xl border border-brand-navy-100 bg-brand-ivory p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-brand-navy">{guide.checklistTitle}</h2>
            <ul className="mt-6 space-y-4">
              {guide.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-8 text-brand-navy-700/85">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-brand-teal-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {trust.sources.length > 0 ? (
            <section className="mt-14" aria-labelledby="guide-official-sources">
              <h2 id="guide-official-sources" className="text-3xl font-bold text-brand-navy">
                {trust.sourcesTitle}
              </h2>
              <p className="mt-4 leading-8 text-brand-navy-700/80">{trust.sourcesNote}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {trust.sources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-brand-navy-100 p-5 transition hover:border-brand-teal-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold text-brand-navy">{source.title}</h3>
                      <ExternalLink className="size-4 shrink-0 text-brand-teal-700" aria-hidden="true" />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-brand-navy-700/75">
                      {source.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-14">
            <h2 className="text-3xl font-bold text-brand-navy">{guide.faqTitle}</h2>
            <div className="mt-6 space-y-5">
              {guide.faq.map((item) => (
                <div key={item.question} className="rounded-2xl border border-brand-navy-100 p-6">
                  <h3 className="text-xl font-bold text-brand-navy">{item.question}</h3>
                  <p className="mt-3 leading-8 text-brand-navy-700/85">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {topic && topicGuides.length > 0 ? (
            <section className="mt-14 rounded-3xl border border-brand-teal-200 bg-brand-teal-50/40 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-brand-navy">{topic.relatedTitle}</h2>
              <p className="mt-3 leading-8 text-brand-navy-700/80">{topic.description}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {topicGuides.map(({ slug: topicSlug, guide: topicGuide }) => (
                  <Link
                    key={topicSlug}
                    href={`/guides/${topicSlug}`}
                    className="group rounded-2xl border border-brand-navy-100 bg-white p-5 transition hover:border-brand-teal-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold text-brand-navy">{topicGuide.title}</h3>
                      <ArrowUpRight className="size-4 shrink-0 text-brand-teal-700" aria-hidden="true" />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-brand-navy-700/75">
                      {topicGuide.description}
                    </p>
                  </Link>
                ))}
              </div>
              <Link
                href={`/guides#topic-${topic.id}`}
                className="mt-6 inline-flex font-semibold text-brand-teal-700 hover:text-brand-teal-600"
              >
                {index.directoryLinkLabel}
              </Link>
            </section>
          ) : null}

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-brand-navy">{guide.relatedTitle}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {guide.relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-brand-navy-100 p-5 transition hover:border-brand-teal-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-brand-navy">{item.title}</h3>
                    <ArrowUpRight className="size-4 shrink-0 text-brand-teal-700" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-brand-navy-700/75">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </Container>
      </article>

      <SolutionLinksSection locale={locale} slugs={solutionSlugs} tone="ivory" />

      <section className="pb-20 lg:pb-24">
        <Container className="max-w-4xl">
          <div className="rounded-3xl bg-brand-navy px-6 py-12 text-center text-white sm:px-10">
            <h2 className="text-3xl font-bold">{guide.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/80">
              {guide.ctaDescription}
            </p>
            <GuideDemoLink
              locale={locale}
              slug={slug}
              label={guide.ctaButton}
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-brand-navy transition hover:bg-brand-ivory"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
