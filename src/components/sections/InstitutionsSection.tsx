import { Building2, Languages, School, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/navigation";

const INSTITUTIONS = [
  { key: "schools", href: "/institutions/schools", icon: School },
  { key: "institutes", href: "/institutions/institutes", icon: Building2 },
  { key: "tutoringCenters", href: "/institutions/tutoring-centers", icon: Users },
  { key: "languageCenters", href: "/institutions/language-centers", icon: Languages },
] as const;

export async function InstitutionsSection() {
  const t = await getTranslations("institutionsSection");
  const tCommon = await getTranslations("common");

  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading title={t("title")} description={t("description")} />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INSTITUTIONS.map((institution) => (
            <Link
              key={institution.key}
              href={institution.href}
              className="group rounded-2xl border border-brand-navy-100 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-teal hover:shadow-lg hover:shadow-brand-teal/5"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-teal-50 text-brand-teal-700 transition group-hover:bg-brand-teal group-hover:text-white">
                <institution.icon aria-hidden="true" className="size-6" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-navy">
                {t(`${institution.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-brand-navy-700/80">
                {t(`${institution.key}.description`)}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-teal-700">
                {tCommon("learnMore")}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
