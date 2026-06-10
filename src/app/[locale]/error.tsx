"use client";

import { useTranslations } from "next-intl";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  const t = useTranslations("errorPage");

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto w-full max-w-xl px-4 text-center sm:px-6">
        <h1 className="text-3xl font-bold text-brand-navy">{t("title")}</h1>
        <p className="mt-3 text-lg leading-8 text-brand-navy-700/85">{t("description")}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-brand-navy px-7 text-base font-semibold text-white transition hover:bg-brand-navy-700"
        >
          {t("retry")}
        </button>
      </div>
    </section>
  );
}
