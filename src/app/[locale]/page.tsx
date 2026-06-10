import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
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
import { SecuritySection } from "@/components/sections/SecuritySection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { TimetableSection } from "@/components/sections/TimetableSection";
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "home", path: "" });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tMeta = await getTranslations("metadata");
  const tFaq = await getTranslations("faq");

  const faqItems = (["q1", "q2", "q3", "q4"] as const).map((key) => ({
    question: tFaq(`items.${key}.question`),
    answer: tFaq(`items.${key}.answer`),
  }));

  const siteName = tMeta("siteName");
  const description = tMeta("home.description");

  return (
    <>
      <JsonLd data={organizationJsonLd({ name: siteName, description })} />
      <JsonLd data={websiteJsonLd({ name: siteName, description })} />
      <JsonLd data={softwareApplicationJsonLd({ name: "Raqeem", description })} />
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <Hero />
      <InstitutionsSection />
      <ProblemSolution />
      <FeaturesSection />
      <RolesSection />
      <ProductSection />
      <TimetableSection />
      <SecuritySection />
      <MultiTenantSection />
      <LanguagesSection />
      <SocialProofSection />
      <FaqSection compact />
      <CtaSection />
    </>
  );
}
