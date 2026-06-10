import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { DemoForm } from "@/features/demo-request/DemoForm";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "demo", path: "/demo" });
}

export default async function DemoPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("forms.demo");

  return (
    <section className="py-16 lg:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-navy">{t("title")}</h1>
        <p className="mt-4 text-lg leading-8 text-brand-navy-700/85">{t("description")}</p>
        <div className="mt-10 rounded-2xl border border-brand-navy-100 bg-white p-6 sm:p-8">
          <DemoForm />
        </div>
      </Container>
    </section>
  );
}
