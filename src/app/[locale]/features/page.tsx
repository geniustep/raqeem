import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { GuideLinksSection } from "@/components/guides/GuideLinksSection";
import { CorePageSummary } from "@/components/sections/CorePageSummary";
import { CtaSection } from "@/components/sections/CtaSection";
import { ProductModulesSection } from "@/components/sections/ProductModulesSection";
import { SolutionLinksSection } from "@/components/solutions/SolutionLinksSection";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const featuredSolutionSlugs = [
  "admissions-enrollment",
  "school-fees-collections",
  "school-communication",
  "attendance-absence",
] as const;

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "features", path: "/features" });
}

export default async function FeaturesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.featuresPage");

  return (
    <>
      <section className="bg-brand-ivory py-16 lg:py-20">
        <Container>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">{t("title")}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-navy-700/85">{t("intro")}</p>
        </Container>
      </section>
      <CorePageSummary locale={locale} page="features" />
      <ProductModulesSection />
      <SolutionLinksSection locale={locale} slugs={featuredSolutionSlugs} tone="ivory" />
      <GuideLinksSection locale={locale} slugs={featuredGuideSlugs} tone="white" />
      <CtaSection />
    </>
  );
}
