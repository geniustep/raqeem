import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { GuideLinksSection } from "@/components/guides/GuideLinksSection";
import { CorePageSummary } from "@/components/sections/CorePageSummary";
import { CtaSection } from "@/components/sections/CtaSection";
import { InstitutionsSection } from "@/components/sections/InstitutionsSection";
import { ProductModulesSection } from "@/components/sections/ProductModulesSection";
import { RolesSection } from "@/components/sections/RolesSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expandedSolutionSlugs, getExpandedSolutionLanding } from "@/content/solution-expansion-pages";
import { getSolutionLanding, solutionLandingSlugs } from "@/content/solution-landing-pages";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { itemListJsonLd } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps { params: Promise<{ locale: Locale }> }

const featuredGuideSlugs = ["integrated-student-journey", "raqeem-and-massar", "mobile-and-desktop-school-management", "cloud-school-management", "school-fees-collections-receipts", "governed-school-communication", "admission-to-student-record", "school-data-isolation"] as const;

const solutionDirectoryCopy: Record<Locale, { title: string; description: string; action: string; strategicTitle: string; strategicDescription: string }> = {
  ar: { title: "مسارات تشغيل متخصصة", description: "صفحات تفصيلية للقبول والمالية والحضور والتواصل ضمن منظومة رقيم.", action: "استكشف الحل", strategicTitle: "حلول للمؤسسات الكبرى والتوسع", strategicDescription: "قدرات رقيم للمجموعات التعليمية والمدارس متعددة الفروع والمدارس الدولية والجامعات الخاصة والنقل المدرسي GPS." },
  fr: { title: "Parcours opérationnels spécialisés", description: "Des pages détaillées pour les admissions, la finance, la présence et la communication.", action: "Explorer la solution", strategicTitle: "Solutions pour grands établissements et croissance", strategicDescription: "Raqeem pour groupes éducatifs, écoles multi-sites, écoles internationales, universités privées et transport scolaire GPS." },
  en: { title: "Dedicated operational journeys", description: "Detailed pages for admissions, finance, attendance and communication.", action: "Explore the solution", strategicTitle: "Solutions for large institutions and scale", strategicDescription: "Raqeem for education groups, multi-branch schools, international schools, private universities and GPS school transport." },
  es: { title: "Recorridos operativos especializados", description: "Páginas detalladas para admisiones, finanzas, asistencia y comunicación.", action: "Explorar la solución", strategicTitle: "Soluciones para grandes instituciones y crecimiento", strategicDescription: "Raqeem para grupos educativos, centros multisede, colegios internacionales, universidades privadas y transporte escolar GPS." }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "solutions", path: "/solutions" });
}

export default async function SolutionsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.solutions");
  const directoryCopy = solutionDirectoryCopy[locale];
  const landingPages = solutionLandingSlugs.flatMap((slug) => { const solution = getSolutionLanding(locale, slug); return solution ? [solution] : []; });
  const strategicPages = expandedSolutionSlugs.flatMap((slug) => { const solution = getExpandedSolutionLanding(locale, slug); return solution ? [solution] : []; });
  const allPages = [...strategicPages, ...landingPages];

  return (
    <>
      <JsonLd data={itemListJsonLd({ name: directoryCopy.strategicTitle, description: directoryCopy.strategicDescription, url: `${SITE_URL}/${locale}/solutions`, items: allPages.map((solution) => ({ name: solution.title, url: `${SITE_URL}/${locale}/solutions/${solution.slug}` })) })} />
      <section className="bg-brand-ivory py-16 lg:py-20"><Container><h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">{t("title")}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-brand-navy-700/85">{t("intro")}</p></Container></section>
      <CorePageSummary locale={locale} page="solutions" />
      <ProductModulesSection />
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <SectionHeading title={directoryCopy.strategicTitle} description={directoryCopy.strategicDescription} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {strategicPages.map((solution) => (
              <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group rounded-3xl border border-brand-navy-100 bg-brand-ivory/35 p-6 transition hover:-translate-y-0.5 hover:border-brand-teal-300 hover:bg-white hover:shadow-lg sm:p-8">
                <div className="flex items-start justify-between gap-5"><div><p className="text-sm font-semibold text-brand-teal-700">{solution.eyebrow}</p><h2 className="mt-3 text-2xl font-bold text-brand-navy">{solution.title}</h2><p className="mt-4 leading-8 text-brand-navy-700/80">{solution.description}</p></div><ArrowUpRight className="size-5 shrink-0 text-brand-teal-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></div>
                <span className="mt-6 inline-flex text-sm font-semibold text-brand-teal-700">{directoryCopy.action}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-brand-ivory/60 py-16 lg:py-20">
        <Container>
          <SectionHeading title={directoryCopy.title} description={directoryCopy.description} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {landingPages.map((solution) => (
              <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group rounded-3xl border border-brand-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-teal-300 hover:shadow-lg sm:p-8">
                <div className="flex items-start justify-between gap-5"><div><p className="text-sm font-semibold text-brand-teal-700">{solution.eyebrow}</p><h2 className="mt-3 text-2xl font-bold text-brand-navy">{solution.title}</h2><p className="mt-4 leading-8 text-brand-navy-700/80">{solution.description}</p></div><ArrowUpRight className="size-5 shrink-0 text-brand-teal-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></div>
                <span className="mt-6 inline-flex text-sm font-semibold text-brand-teal-700">{directoryCopy.action}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <GuideLinksSection locale={locale} slugs={featuredGuideSlugs} tone="white" />
      <RolesSection />
      <InstitutionsSection />
      <CtaSection />
    </>
  );
}
