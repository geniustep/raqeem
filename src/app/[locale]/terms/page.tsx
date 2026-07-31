import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";
import { termsAndConditions } from "@/content/terms-and-conditions";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "terms", path: "/terms" });
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const terms = termsAndConditions[locale];

  return (
    <section className="py-16 lg:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-navy">{terms.title}</h1>
        <p className="mt-3 text-sm text-brand-navy-700/70">{terms.updated}</p>
        <div className="mt-10 space-y-10">
          {terms.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-brand-navy">{section.title}</h2>
              <p className="mt-3 whitespace-pre-line leading-8 text-brand-navy-700/85">{section.text}</p>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
