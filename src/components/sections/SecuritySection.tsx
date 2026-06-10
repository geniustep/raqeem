import { Lock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/navigation";

const POINTS = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

export async function SecuritySection() {
  const t = await getTranslations("security");

  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading title={t("title")} description={t("description")} />
        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {POINTS.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 rounded-xl border border-brand-navy-100 bg-white px-5 py-4"
            >
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-teal-50 text-brand-teal-700">
                <Lock aria-hidden="true" className="size-4" strokeWidth={2} />
              </span>
              <span className="text-sm font-medium text-brand-navy sm:text-base">
                {t(`points.${point}`)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link
            href="/security"
            className="inline-flex items-center text-base font-semibold text-brand-teal-700 transition hover:text-brand-teal-600"
          >
            {t("cta")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
