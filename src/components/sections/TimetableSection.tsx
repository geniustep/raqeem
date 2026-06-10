import { CalendarClock, ChevronLeft, ChevronRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { localeDirections, type Locale } from "@/i18n/routing";

const FLOW_STEPS = ["setup", "draft", "validate", "review", "publish"] as const;
const POINTS = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

export async function TimetableSection() {
  const t = await getTranslations("timetableSection");
  const locale = (await getLocale()) as Locale;
  const isRtl = localeDirections[locale] === "rtl";
  const ArrowIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <section className="bg-brand-navy py-20 text-white lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-gold">
            <CalendarClock aria-hidden="true" className="size-4" strokeWidth={2} />
            {t("flowTitle")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-lg leading-8 text-white/80">{t("description")}</p>
        </div>

        <ol className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FLOW_STEPS.map((step, index) => (
            <li key={step} className="flex items-center gap-2 sm:gap-3">
              <span className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 text-sm font-semibold">
                <span className="text-brand-gold">{index + 1}</span>
                {t(`flow.${step}`)}
              </span>
              {index < FLOW_STEPS.length - 1 ? (
                <ArrowIcon aria-hidden="true" className="size-4 text-white/40" strokeWidth={2} />
              ) : null}
            </li>
          ))}
        </ol>

        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-3 text-white/90">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-teal"
              />
              {t(`points.${point}`)}
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href="/timetable"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 text-base font-semibold text-brand-navy transition hover:bg-brand-ivory"
          >
            {t("cta")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
