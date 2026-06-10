import { CalendarClock, FileCheck, MessagesSquare, UserCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";

export async function Hero() {
  const t = await getTranslations("hero");

  const mockupCards = [
    { icon: UserCheck, label: t("mockupAttendance") },
    { icon: FileCheck, label: t("mockupHomework") },
    { icon: CalendarClock, label: t("mockupTimetable") },
    { icon: MessagesSquare, label: t("mockupMessages") },
  ];

  return (
    <section className="relative -mt-16 overflow-hidden bg-brand-ivory pt-16 lg:-mt-20 lg:pt-20">
      <div aria-hidden="true" className="bg-grid-soft absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -top-32 end-0 size-96 rounded-full bg-brand-teal-50 blur-3xl"
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="max-w-xl">
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

        <div aria-hidden="true" className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="rounded-2xl border border-brand-navy-100 bg-white p-5 shadow-xl shadow-brand-navy/5">
            <div className="flex items-center justify-between border-b border-brand-navy-50 pb-4">
              <div>
                <p className="text-sm font-bold text-brand-navy">{t("mockupTitle")}</p>
                <p className="text-xs text-brand-navy-700/60">{t("mockupSubtitle")}</p>
              </div>
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-brand-teal-100" />
                <span className="size-2.5 rounded-full bg-brand-gold-100" />
                <span className="size-2.5 rounded-full bg-brand-navy-100" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {mockupCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl border border-brand-navy-50 bg-brand-ivory/60 p-4"
                >
                  <card.icon className="size-5 text-brand-teal-600" strokeWidth={2} />
                  <p className="mt-2 text-sm font-semibold text-brand-navy">{card.label}</p>
                  <div className="mt-3 space-y-1.5">
                    <div className="h-1.5 w-4/5 rounded-full bg-brand-navy-100" />
                    <div className="h-1.5 w-3/5 rounded-full bg-brand-navy-50" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -start-4 hidden w-36 rounded-2xl border border-brand-navy-100 bg-white p-3 shadow-lg sm:block">
            <p className="text-center text-[11px] font-semibold text-brand-navy-700/70">
              {t("mockupMobileTitle")}
            </p>
            <div className="mt-2 space-y-1.5 rounded-lg bg-brand-ivory/80 p-2.5">
              <div className="h-1.5 w-full rounded-full bg-brand-teal-100" />
              <div className="h-1.5 w-3/4 rounded-full bg-brand-navy-100" />
              <div className="h-1.5 w-5/6 rounded-full bg-brand-navy-50" />
              <div className="h-1.5 w-2/3 rounded-full bg-brand-gold-100" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
