import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { GuideLinksSection } from "@/components/guides/GuideLinksSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { Hero } from "@/components/sections/Hero";
import { InstitutionsSection } from "@/components/sections/InstitutionsSection";
import { LanguagesSection } from "@/components/sections/LanguagesSection";
import { MultiTenantSection } from "@/components/sections/MultiTenantSection";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ProductSection } from "@/components/sections/ProductSection";
import { RolesSection } from "@/components/sections/RolesSection";
import { SchoolJourneySection } from "@/components/sections/SchoolJourneySection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { TimetableSection } from "@/components/sections/TimetableSection";
import { getEntityProfile } from "@/content/entity-profile";
import type { Locale } from "@/i18n/routing";
import {
  faqPageJsonLd,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const featuredGuideSlugs = [
  "choosing-school-management-system",
  "admission-to-student-record",
  "school-data-isolation",
  "school-fees-collections-receipts",
  "governed-school-communication",
] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "home", path: "" });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tFaq = await getTranslations("faq");
  const entity = getEntityProfile(locale);

  const faqItems = (["q1", "q2", "q3", "q4"] as const).map((key) => ({
    question: tFaq(`items.${key}.question`),
    answer: tFaq(`items.${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={organizationJsonLd({ name: entity.name, description: entity.description })} />
      <JsonLd data={websiteJsonLd({ name: entity.name, description: entity.description })} />
      <JsonLd
        data={
          softwareApplicationJsonLd({
            name: entity.name,
            description: entity.description,
            locale,
          })
        }
      />
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <Hero />
      {locale === "ar" ? <SchoolJourneySection /> : <InstitutionsSection />}
      <ProblemSolution />
      <GuideLinksSection locale={locale} slugs={featuredGuideSlugs} tone="white" />
      <FeaturesSection />
      <RolesSection />
      <ProductSection />
      <TimetableSection />
      <SecuritySection />
      <MultiTenantSection />
      <LanguagesSection />
      {locale === "ar" ? null : <SocialProofSection />}
      <FaqSection compact />
      <CtaSection />
    </>
  );
}
