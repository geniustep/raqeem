import { Check, X } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function ProblemSolution() {
  const t = await getTranslations("problemSolution");

  const problems = (["p1", "p2", "p3", "p4", "p5"] as const).map((key) => t(`problems.${key}`));
  const before = (["b1", "b2", "b3"] as const).map((key) => t(`before.${key}`));
  const after = (["a1", "a2", "a3"] as const).map((key) => t(`after.${key}`));

  return (
    <section className="bg-brand-ivory py-20 lg:py-24">
      <Container>
        <SectionHeading title={t("title")} description={t("intro")} />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <ul className="space-y-3 rounded-2xl border border-brand-navy-100 bg-white p-6">
            {problems.map((problem) => (
              <li key={problem} className="flex items-start gap-3 text-brand-navy-700/90">
                <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-navy-50">
                  <X
                    aria-hidden="true"
                    className="size-3 text-brand-navy-700/60"
                    strokeWidth={2.5}
                  />
                </span>
                <span className="text-sm leading-6 sm:text-base">{problem}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col justify-center rounded-2xl bg-brand-navy p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
              {t("solutionTitle")}
            </p>
            <p className="mt-3 text-xl font-bold leading-9">{t("solution")}</p>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-brand-navy-100 bg-white p-6">
            <p className="text-sm font-bold text-brand-navy-700/70">{t("beforeLabel")}</p>
            <ul className="mt-4 space-y-3">
              {before.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-brand-navy-700/80"
                >
                  <X
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-brand-navy-700/50"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-teal-100 bg-brand-teal-50/60 p-6">
            <p className="text-sm font-bold text-brand-teal-700">{t("afterLabel")}</p>
            <ul className="mt-4 space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-navy">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-brand-teal-700"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
