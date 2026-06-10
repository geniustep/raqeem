import { CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CtaSection } from "@/components/sections/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/jsonld";

interface DetailPageProps {
  locale: Locale;
  /** Message namespace containing title, intro and points, e.g. "pages.institutions.schools". */
  namespace: string;
  /** Path without the locale prefix, e.g. "/institutions/schools". */
  path: string;
  pointsCount?: number;
}

export async function DetailPage({ locale, namespace, path, pointsCount = 6 }: DetailPageProps) {
  const t = await getTranslations(namespace);
  const tCommon = await getTranslations("common");

  const points = Array.from({ length: pointsCount }, (_, index) => t(`points.${index + 1}`));

  const breadcrumb = breadcrumbJsonLd([
    { name: tCommon("breadcrumbHome"), url: `${SITE_URL}/${locale}` },
    { name: t("title"), url: `${SITE_URL}/${locale}${path}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <section className="bg-brand-ivory py-16 lg:py-20">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-brand-navy-700/70">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-brand-teal-700">
                  {tCommon("breadcrumbHome")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-brand-navy">
                {t("title")}
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-navy-700/85">{t("intro")}</p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-brand-navy-100 bg-white p-5"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-brand-teal-600"
                  strokeWidth={2}
                />
                <span className="text-sm font-medium leading-6 text-brand-navy sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
