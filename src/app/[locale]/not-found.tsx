import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";

export default async function NotFoundPage() {
  const t = await getTranslations("notFound");

  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-xl text-center">
        <p className="text-6xl font-extrabold text-brand-teal">404</p>
        <h1 className="mt-4 text-3xl font-bold text-brand-navy">{t("title")}</h1>
        <p className="mt-3 text-lg leading-8 text-brand-navy-700/85">{t("description")}</p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-brand-navy px-7 text-base font-semibold text-white transition hover:bg-brand-navy-700"
        >
          {t("backHome")}
        </Link>
      </Container>
    </section>
  );
}
