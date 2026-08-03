import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, ClipboardCheck, ShieldCheck } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { GuideLinksSection } from "@/components/guides/GuideLinksSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import {
  getSolutionLanding,
  solutionLandingSlugs,
} from "@/content/solution-landing-pages";
import { Link } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/jsonld";
import { buildLocalizedMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

const labels: Record<
  Locale,
  { home: string; solutions: string; back: string; benefitsEyebrow: string }
> = {
  ar: {
    home: "الرئيسية",
    solutions: "حلول رقيم",
    back: "جميع الحلول",
    benefitsEyebrow: "مسار عملي داخل المؤسسة",
  },
  fr: {
    home: "Accueil",
    solutions: "Solutions Raqeem",
    back: "Toutes les solutions",
    benefitsEyebrow: "Un parcours opérationnel dans l’établissement",
  },
  en: {
    home: "Home",
    solutions: "Raqeem solutions",
    back: "All solutions",
    benefitsEyebrow: "An operational journey inside the institution",
  },
  es: {
    home: "Inicio",
    solutions: "Soluciones Raqeem",
    back: "Todas las soluciones",
    benefitsEyebrow: "Un recorrido operativo dentro de la institución",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    solutionLandingSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = getSolutionLanding(locale, slug);

  if (!content) {
    return {};
  }

  return buildLocalizedMetadata({
    locale,
    path: `/solutions/${slug}`,
    title: content.title,
    description: content.description,
  });
}

export default async function SolutionLandingPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const content = getSolutionLanding(locale, slug);

  if (!content) {
    notFound();
  }

  setRequestLocale(locale);
  const copy = labels[locale];
  const url = `${SITE_URL}/${locale}/solutions/${slug}`;

  return (
    <>
      <JsonLd
        data={
          serviceJsonLd({
            name: content.title,
            description: content.description,
            url,
            inLanguage: locale,
            serviceType: content.eyebrow,
          })
        }
      />
      <JsonLd data={faqPageJsonLd(content.faq)} />
      <JsonLd
        data={
          breadcrumbJsonLd([
            { name: copy.home, url: `${SITE_URL}/${locale}` },
            { name: copy.solutions, url: `${SITE_URL}/${locale}/solutions` },
            { name: content.title, url },
          ])
        }
      />

      <article>
        <header className="bg-brand-ivory py-16 lg:py-24">
          <Container className="max-w-5xl">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-700 transition hover:text-brand-teal-600"
            >
              <ArrowUpRight className="size-4 rotate-[-135deg]" aria-hidden="true" />
              {copy.back}
            </Link>
            <p className="mt-7 text-sm font-semibold text-brand-teal-700">{content.eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-navy-700/85">
              {content.description}
            </p>
          </Container>
        </header>

        <Container className="max-w-5xl py-14 lg:py-20">
          <section className="rounded-3xl border border-brand-teal-200 bg-brand-teal-50/60 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-brand-navy">{content.directAnswerTitle}</h2>
            <p className="mt-4 text-lg leading-9 text-brand-navy-700/90">
              {content.directAnswer}
            </p>
          </section>

          <section className="mt-14">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-700">
              <ClipboardCheck className="size-4" aria-hidden="true" />
              {copy.benefitsEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy">
              {content.benefitsTitle}
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {content.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-brand-navy-100 bg-white p-5"
                >
                  <CheckCircle2
                    className="mt-1 size-5 shrink-0 text-brand-teal-700"
                    aria-hidden="true"
                  />
                  <p className="leading-8 text-brand-navy-700/85">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
              {content.workflowTitle}
            </h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2">
              {content.workflow.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-3xl border border-brand-navy-100 bg-white p-6"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-teal-50 text-sm font-extrabold text-brand-teal-700">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-brand-navy">{step.title}</h3>
                  <p className="mt-3 leading-8 text-brand-navy-700/80">{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16 rounded-3xl border border-brand-navy-100 bg-brand-ivory p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-teal-700">
                <ShieldCheck className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-brand-navy">{content.boundariesTitle}</h2>
                <p className="mt-3 leading-8 text-brand-navy-700/85">{content.boundaries}</p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy">
              {content.faqTitle}
            </h2>
            <div className="mt-7 space-y-5">
              {content.faq.map((item) => (
                <div key={item.question} className="rounded-2xl border border-brand-navy-100 p-6">
                  <h3 className="text-xl font-bold text-brand-navy">{item.question}</h3>
                  <p className="mt-3 leading-8 text-brand-navy-700/85">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </article>

      <GuideLinksSection locale={locale} slugs={content.relatedGuideSlugs} />

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
