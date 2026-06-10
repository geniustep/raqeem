import type { Metadata } from "next";
import { Eye, Gem, Target } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Logo } from "@/components/brand/Logo";
import { CtaSection } from "@/components/sections/CtaSection";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "about", path: "/about" });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.about");
  const tCommon = await getTranslations("common");

  return (
    <>
      <section className="bg-brand-ivory py-16 lg:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-navy-700/85">{t("intro")}</p>
            <p className="mt-4 text-sm font-semibold text-brand-teal-700">
              {tCommon("brandAudience")}
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm rounded-2xl border border-brand-navy-100 bg-white p-10">
            <Logo alt={tCommon("logoAlt")} className="h-auto w-full" />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-brand-navy-100 bg-white p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-teal-50 text-brand-teal-700">
                <Target aria-hidden="true" className="size-5" strokeWidth={2} />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-brand-navy">{t("missionTitle")}</h2>
              <p className="mt-3 leading-8 text-brand-navy-700/85">{t("missionText")}</p>
            </article>
            <article className="rounded-2xl border border-brand-navy-100 bg-white p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-teal-50 text-brand-teal-700">
                <Eye aria-hidden="true" className="size-5" strokeWidth={2} />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-brand-navy">{t("visionTitle")}</h2>
              <p className="mt-3 leading-8 text-brand-navy-700/85">{t("visionText")}</p>
            </article>
          </div>

          <div className="mt-16">
            <h2 className="text-center text-3xl font-bold text-brand-navy">{t("valuesTitle")}</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {(["1", "2", "3"] as const).map((value) => (
                <article
                  key={value}
                  className="rounded-2xl border border-brand-navy-100 bg-brand-ivory/60 p-6 text-center"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white text-brand-gold-600 shadow-sm">
                    <Gem aria-hidden="true" className="size-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">
                    {t(`values.${value}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-navy-700/80">
                    {t(`values.${value}.text`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
