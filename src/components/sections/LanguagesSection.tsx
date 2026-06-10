import { Globe } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { localeNames, locales } from "@/i18n/routing";

export async function LanguagesSection() {
  const t = await getTranslations("languagesSection");

  return (
    <section className="py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border border-brand-navy-100 bg-white p-8 text-center sm:p-12">
          <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-teal-50 text-brand-teal-700">
            <Globe aria-hidden="true" className="size-6" strokeWidth={2} />
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-navy">{t("title")}</h2>
          <p className="mt-4 text-lg leading-8 text-brand-navy-700/80">{t("description")}</p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {locales.map((locale) => (
              <li
                key={locale}
                className="inline-flex h-10 items-center rounded-full border border-brand-navy-100 bg-brand-ivory px-5 text-sm font-semibold text-brand-navy"
              >
                {localeNames[locale]}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
