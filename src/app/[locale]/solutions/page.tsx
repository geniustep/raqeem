import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { GuideLinksSection } from "@/components/guides/GuideLinksSection";
import { ROLE_LINKS } from "@/components/navigation/links";
import { CorePageSummary } from "@/components/sections/CorePageSummary";
import { CtaSection } from "@/components/sections/CtaSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { InstitutionsSection } from "@/components/sections/InstitutionsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getSolutionLanding,
  solutionLandingSlugs,
} from "@/content/solution-landing-pages";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { itemListJsonLd } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const featuredGuideSlugs = [
  "integrated-student-journey",
  "raqeem-and-massar",
  "mobile-and-desktop-school-management",
  "cloud-school-management",
  "school-fees-collections-receipts",
  "governed-school-communication",
  "admission-to-student-record",
  "school-data-isolation",
] as const;

const solutionDirectoryCopy: Record<
  Locale,
  { title: string; description: string; action: string }
> = {
  ar: {
    title: "حلول حسب المسار التشغيلي",
    description:
      "صفحات مخصصة تشرح كيف يدعم رقيم كل مسار، وما حدوده، والأسئلة التي يجب التحقق منها داخل المؤسسة.",
    action: "استكشف الحل",
  },
  fr: {
    title: "Solutions par parcours opérationnel",
    description:
      "Des pages dédiées qui expliquent le fonctionnement de chaque parcours, ses limites et les contrôles utiles dans l’établissement.",
    action: "Découvrir la solution",
  },
  en: {
    title: "Solutions by operational journey",
    description:
      "Dedicated pages explaining how each journey works, its boundaries and the checks that matter inside the institution.",
    action: "Explore the solution",
  },
  es: {
    title: "Soluciones por recorrido operativo",
    description:
      "Páginas específicas que explican cada recorrido, sus límites y los controles relevantes dentro de la institución.",
    action: "Explorar la solución",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "solutions", path: "/solutions" });
}

export default async function SolutionsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.solutions");
  const tRoles = await getTranslations("roles");
  const tCommon = await getTranslations("common");
  const directoryCopy = solutionDirectoryCopy[locale];
  const landingPages = solutionLandingSlugs.map((slug) => getSolutionLanding(locale, slug));

  return (
    <>
      <JsonLd
        data={
          itemListJsonLd({
            name: directoryCopy.title,
            description: directoryCopy.description,
            url: `${SITE_URL}/${locale}/solutions`,
            items: landingPages.map((solution) => ({
              name: solution.title,
              url: `${SITE_URL}/${locale}/solutions/${solution.slug}`,
            })),
          })
        }
      />

      <section className="bg-brand-ivory py-16 lg:py-20">
        <Container>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-navy-700/85">{t("intro")}</p>
        </Container>
      </section>

      <CorePageSummary locale={locale} page="solutions" />

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading title={directoryCopy.title} description={directoryCopy.description} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {landingPages.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group rounded-3xl border border-brand-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-teal-300 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-semibold text-brand-teal-700">{solution.eyebrow}</p>
                    <h2 className="mt-3 text-2xl font-bold text-brand-navy">{solution.title}</h2>
                    <p className="mt-4 leading-8 text-brand-navy-700/80">
                      {solution.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-brand-teal-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
                <span className="mt-6 inline-flex text-sm font-semibold text-brand-teal-700">
                  {directoryCopy.action}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FeaturesSection />
      <GuideLinksSection locale={locale} slugs={featuredGuideSlugs} tone="white" />

      <section className="bg-brand-ivory py-20 lg:py-24">
        <Container>
          <SectionHeading title={t("rolesTitle")} description={t("rolesIntro")} />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLE_LINKS.map((role) => (
              <Link
                key={role.key}
                href={role.href}
                className="group rounded-2xl border border-brand-navy-100 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-teal hover:shadow-lg hover:shadow-brand-teal/5"
              >
                <h3 className="text-lg font-bold text-brand-navy">{tRoles(`${role.key}.label`)}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-navy-700/80">
                  {tRoles(`${role.key}.title`)}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-teal-700">
                  {tCommon("learnMore")}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <InstitutionsSection />
      <CtaSection />
    </>
  );
}
