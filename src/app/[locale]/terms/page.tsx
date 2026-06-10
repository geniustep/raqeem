import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const SECTIONS = ["intro", "site", "ip", "platform", "liability", "changes"] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "terms", path: "/terms" });
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.terms");

  return (
    <section className="py-16 lg:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-navy">{t("title")}</h1>
        <p className="mt-3 text-sm text-brand-navy-700/70">{t("updated")}</p>
        <div className="mt-10 space-y-10">
          {SECTIONS.map((section) => (
            <section key={section}>
              <h2 className="text-xl font-bold text-brand-navy">
                {t(`sections.${section}.title`)}
              </h2>
              <p className="mt-3 leading-8 text-brand-navy-700/85">
                {t(`sections.${section}.text`)}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
