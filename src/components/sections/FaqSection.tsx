import { ChevronDown } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFaqItems } from "@/content/faq-catalog";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export async function FaqSection({ compact = false }: { compact?: boolean }) {
  const t = await getTranslations("faq");
  const locale = (await getLocale()) as Locale;
  const allItems = getFaqItems(locale);
  const items = compact ? allItems.slice(0, 4) : allItems;
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading title={t("title")} description={t("description")} />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((item) => (
            <details key={item.question} className="group rounded-xl border border-brand-navy-100 bg-white open:border-brand-teal">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-start font-semibold text-brand-navy [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown aria-hidden="true" className="size-5 shrink-0 text-brand-teal-700 transition-transform group-open:rotate-180" strokeWidth={2} />
              </summary>
              <p className="px-5 pb-5 text-sm leading-7 text-brand-navy-700/85 sm:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
        {compact ? (
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-base font-semibold text-brand-teal-700 transition hover:text-brand-teal-600">{t("viewAll")}</Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
