import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { getEntityProfile } from "@/content/entity-profile";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export async function Hero() {
  const t = await getTranslations("hero");
  const locale = (await getLocale()) as Locale;
  const entity = getEntityProfile(locale);

  return (
    <section className="relative -mt-16 overflow-hidden bg-brand-ivory pt-16 lg:-mt-20 lg:pt-20">
      <div aria-hidden="true" className="bg-grid-soft absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -top-32 end-0 size-96 rounded-full bg-brand-teal-50 blur-3xl"
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold leading-6 text-brand-teal-700">
            {entity.descriptor}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand-navy-700/85">{t("description")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-navy px-7 text-base font-semibold text-white shadow-sm transition hover:bg-brand-navy-700"
            >
              {t("primaryCta")}
            </Link>
            <Link
              href="/solutions"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-brand-navy-100 bg-white px-7 text-base font-semibold text-brand-navy transition hover:border-brand-teal hover:text-brand-teal-700"
            >
              {t("secondaryCta")}
            </Link>
          </div>
          <p className="mt-4 text-sm text-brand-navy-700/70">{t("audience")}</p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="rounded-3xl border border-brand-navy-100 bg-white p-2 shadow-2xl shadow-brand-navy/10 sm:p-3">
            <div className="flex items-center justify-between gap-4 px-3 py-2 sm:px-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-brand-navy">{t("mockupTitle")}</p>
                <p className="truncate text-xs text-brand-navy-700/60">{t("mockupSubtitle")}</p>
              </div>
              <div aria-hidden="true" className="flex shrink-0 gap-1.5">
                <span className="size-2.5 rounded-full bg-brand-teal-100" />
                <span className="size-2.5 rounded-full bg-brand-gold-100" />
                <span className="size-2.5 rounded-full bg-brand-navy-100" />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-brand-navy-50 bg-white">
              <Image
                src="/screenshots/raqeem-executive-dashboard.png"
                alt={t("mockupTitle")}
                width={1884}
                height={811}
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-8 -end-8 -z-10 size-44 rounded-full bg-brand-gold-50 blur-2xl sm:size-56"
          />
        </div>
      </Container>
    </section>
  );
}
