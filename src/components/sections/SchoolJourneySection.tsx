import {
  BookOpenCheck,
  ChartNoAxesCombined,
  CircleDollarSign,
  GraduationCap,
  School,
  UserRoundPlus,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  { key: "admissions", icon: UserRoundPlus },
  { key: "student", icon: GraduationCap },
  { key: "schooling", icon: School },
  { key: "finance", icon: CircleDollarSign },
  { key: "learning", icon: BookOpenCheck },
  { key: "decision", icon: ChartNoAxesCombined },
] as const;

export async function SchoolJourneySection() {
  const t = await getTranslations("schoolJourney");

  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
        <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.key}
              className="relative overflow-hidden rounded-2xl border border-brand-navy-100 bg-white p-6"
            >
              <span className="absolute end-4 top-3 text-5xl font-extrabold text-brand-navy-50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-teal-50 text-brand-teal-700">
                <step.icon aria-hidden="true" className="size-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-navy">{t(`${step.key}.title`)}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-navy-700/80">
                {t(`${step.key}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
