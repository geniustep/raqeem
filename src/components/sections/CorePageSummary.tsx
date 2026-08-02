import { CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getCorePageContent, type CorePageKey } from "@/content/core-pages";
import type { Locale } from "@/i18n/routing";

interface CorePageSummaryProps {
  locale: Locale;
  page: CorePageKey;
  tone?: "white" | "ivory";
}

const eyebrowLabels: Record<Locale, string> = {
  ar: "إجابة مباشرة",
  fr: "Réponse directe",
  en: "Direct answer",
  es: "Respuesta directa",
};

export function CorePageSummary({ locale, page, tone = "white" }: CorePageSummaryProps) {
  const content = getCorePageContent(locale, page);

  if (!content) {
    return null;
  }

  return (
    <section className={tone === "ivory" ? "bg-brand-ivory py-14 lg:py-16" : "py-14 lg:py-16"}>
      <Container className="max-w-5xl">
        <div className="rounded-3xl border border-brand-teal-200 bg-brand-teal-50/60 p-6 sm:p-8 lg:p-10">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-700">
            <Sparkles className="size-4" aria-hidden="true" />
            {eyebrowLabels[locale]}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
            {content.answerTitle}
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-9 text-brand-navy-700/90">
            {content.answer}
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {content.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-brand-teal-100 bg-white/80 p-4 leading-7 text-brand-navy-700/85"
              >
                <CheckCircle2
                  className="mt-1 size-5 shrink-0 text-brand-teal-700"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
