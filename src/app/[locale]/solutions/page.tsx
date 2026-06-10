import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaSection } from "@/components/sections/CtaSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { InstitutionsSection } from "@/components/sections/InstitutionsSection";
import { ROLE_LINKS } from "@/components/navigation/links";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

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

  return (
    <>
      <section className="bg-brand-ivory py-16 lg:py-20">
        <Container>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-navy-700/85">{t("intro")}</p>
        </Container>
      </section>

      <FeaturesSection />

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
