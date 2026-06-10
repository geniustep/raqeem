import type { Metadata } from "next";
import { CalendarCog, ClipboardCheck, FilePen, Send } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaSection } from "@/components/sections/CtaSection";
import { TimetableSection } from "@/components/sections/TimetableSection";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "timetable", path: "/timetable" });
}

export default async function TimetablePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.timetablePage");

  const steps = [
    { icon: CalendarCog, title: t("setupTitle"), text: t("setupText") },
    { icon: FilePen, title: t("buildTitle"), text: t("buildText") },
    { icon: ClipboardCheck, title: t("validateTitle"), text: t("validateText") },
    { icon: Send, title: t("publishTitle"), text: t("publishText") },
  ];

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

      <section className="py-16 lg:py-20">
        <Container>
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-brand-navy-100 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-teal-50 text-brand-teal-700">
                    <step.icon aria-hidden="true" className="size-5" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-bold text-brand-gold-600">{index + 1}</span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-brand-navy">{step.title}</h2>
                <p className="mt-2 leading-7 text-brand-navy-700/85">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <TimetableSection />
      <CtaSection />
    </>
  );
}
