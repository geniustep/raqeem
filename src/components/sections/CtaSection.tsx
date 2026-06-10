import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";

export async function CtaSection() {
  const t = await getTranslations("ctaSection");

  return (
    <section className="pb-20 lg:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-6 py-16 text-center text-white sm:px-12">
          <div aria-hidden="true" className="bg-grid-soft absolute inset-0 opacity-20" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
              {t("description")}
            </p>
            <Link
              href="/demo"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-brand-teal px-8 text-base font-semibold text-white transition hover:bg-brand-teal-600"
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
