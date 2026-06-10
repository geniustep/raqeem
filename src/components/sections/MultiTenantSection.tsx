import { Network } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const POINTS = ["1", "2", "3", "4", "5", "6"] as const;

export async function MultiTenantSection() {
  const t = await getTranslations("multiTenant");

  return (
    <section className="bg-brand-ivory py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="start" title={t("title")} description={t("description")} />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-brand-navy-700/90 sm:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-teal"
                  />
                  {t(`points.${point}`)}
                </li>
              ))}
            </ul>
          </div>
          <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
            <div className="rounded-2xl border border-brand-navy-100 bg-white p-6 text-center shadow-sm">
              <span className="inline-flex size-14 items-center justify-center rounded-xl bg-brand-navy text-white">
                <Network className="size-7" strokeWidth={1.5} />
              </span>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((branch) => (
                  <div
                    key={branch}
                    className="rounded-xl border border-brand-navy-50 bg-brand-ivory/70 p-3"
                  >
                    <div className="mx-auto size-7 rounded-lg bg-brand-teal-100" />
                    <div className="mx-auto mt-2 h-1.5 w-3/4 rounded-full bg-brand-navy-100" />
                    <div className="mx-auto mt-1.5 h-1.5 w-1/2 rounded-full bg-brand-navy-50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
