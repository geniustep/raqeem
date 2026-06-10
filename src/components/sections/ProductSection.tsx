import { Monitor, Smartphone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function ProductSection() {
  const t = await getTranslations("product");

  const apps = [
    { key: "teacherApp", label: t("teacherApp") },
    { key: "parentApp", label: t("parentApp") },
    { key: "studentApp", label: t("studentApp") },
  ];

  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading title={t("title")} description={t("description")} />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <figure className="rounded-2xl border border-brand-navy-100 bg-white p-5">
            <div
              aria-hidden="true"
              className="bg-grid-soft flex aspect-video items-center justify-center rounded-xl border border-brand-navy-50 bg-brand-ivory/70"
            >
              <span className="inline-flex flex-col items-center gap-2 text-brand-navy-700/60">
                <Monitor className="size-10" strokeWidth={1.5} />
                <span className="text-xs font-medium">{t("placeholderNote")}</span>
              </span>
            </div>
            <figcaption className="mt-4 text-center text-sm font-semibold text-brand-navy">
              {t("web")}
            </figcaption>
          </figure>

          <div className="grid grid-cols-3 gap-4">
            {apps.map((app) => (
              <figure
                key={app.key}
                className="flex flex-col rounded-2xl border border-brand-navy-100 bg-white p-3"
              >
                <div
                  aria-hidden="true"
                  className="bg-dots-soft flex flex-1 items-center justify-center rounded-xl border border-brand-navy-50 bg-brand-ivory/70 py-10"
                >
                  <Smartphone className="size-8 text-brand-navy-700/50" strokeWidth={1.5} />
                </div>
                <figcaption className="mt-3 text-center text-xs font-semibold text-brand-navy sm:text-sm">
                  {app.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
