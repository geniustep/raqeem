import {
  CalendarClock,
  ClipboardList,
  FileCheck,
  LayoutDashboard,
  MessagesSquare,
  UserCheck,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/navigation";

export const FEATURE_GROUPS = [
  { key: "administration", icon: LayoutDashboard, href: "/features" },
  { key: "attendance", icon: UserCheck, href: "/features" },
  { key: "homework", icon: FileCheck, href: "/features" },
  { key: "timetable", icon: CalendarClock, href: "/timetable" },
  { key: "exams", icon: ClipboardList, href: "/features" },
  { key: "communication", icon: MessagesSquare, href: "/features" },
] as const;

export async function FeaturesSection({ detailed = false }: { detailed?: boolean }) {
  const t = await getTranslations("features");
  const tCommon = await getTranslations("common");

  return (
    <section className="py-20 lg:py-24">
      <Container>
        {detailed ? null : <SectionHeading title={t("title")} description={t("description")} />}
        <div
          className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ${detailed ? "" : "mt-12"}`}
        >
          {FEATURE_GROUPS.map((group) => (
            <article
              key={group.key}
              className="flex flex-col rounded-2xl border border-brand-navy-100 bg-white p-6 transition hover:border-brand-teal hover:shadow-lg hover:shadow-brand-teal/5"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-navy-50 text-brand-navy">
                <group.icon aria-hidden="true" className="size-6" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-navy">{t(`${group.key}.title`)}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-navy-700/80">
                {t(`${group.key}.description`)}
              </p>
              <ul className="mt-4 flex-1 space-y-2">
                {(["1", "2", "3", "4", "5"] as const).map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-brand-navy-700/85">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-teal"
                    />
                    {t(`${group.key}.points.${point}`)}
                  </li>
                ))}
              </ul>
              <Link
                href={group.href}
                className="mt-5 inline-block text-sm font-semibold text-brand-teal-700 transition hover:text-brand-teal-600"
              >
                {tCommon("learnMore")}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
