import type { LucideIcon } from "lucide-react";
import {
  CalendarClock,
  CircleDollarSign,
  ClipboardList,
  FileCheck,
  GraduationCap,
  MessagesSquare,
  Presentation,
  ShieldCheck,
  UserCheck,
  UserRoundPlus,
} from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getCommercialProductCatalog,
  type CommercialProductKey,
} from "@/content/commercial-product-catalog";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const ICONS: Record<CommercialProductKey, LucideIcon> = {
  admissions: UserRoundPlus,
  students: GraduationCap,
  finance: CircleDollarSign,
  attendance: UserCheck,
  timetable: CalendarClock,
  teaching: Presentation,
  homework: FileCheck,
  exams: ClipboardList,
  communication: MessagesSquare,
  staff: ShieldCheck,
};

export async function ProductModulesSection() {
  const locale = (await getLocale()) as Locale;
  const copy = getCommercialProductCatalog(locale);
  const tCommon = await getTranslations("common");

  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading title={copy.title} description={copy.description} />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {copy.items.map((item) => {
            const Icon = ICONS[item.key];
            return (
              <article
                key={item.key}
                className={`flex min-h-56 flex-col rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-lg ${
                  item.featured
                    ? "border-brand-teal-200 bg-brand-teal-50/40 shadow-sm"
                    : "border-brand-navy-100 bg-white hover:border-brand-teal-200"
                }`}
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-navy-50 text-brand-navy">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-brand-navy-700/80">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex text-sm font-semibold text-brand-teal-700 transition hover:text-brand-teal-600"
                >
                  {tCommon("learnMore")}
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
