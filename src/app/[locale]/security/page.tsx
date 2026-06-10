import type { Metadata } from "next";
import { FileLock2, Server, ShieldCheck, UsersRound } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaSection } from "@/components/sections/CtaSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "security", path: "/security" });
}

export default async function SecurityPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.securityPage");

  const topics = [
    { icon: UsersRound, title: t("rolesTitle"), text: t("rolesText") },
    { icon: ShieldCheck, title: t("isolationTitle"), text: t("isolationText") },
    { icon: FileLock2, title: t("attachmentsTitle"), text: t("attachmentsText") },
    { icon: Server, title: t("serverTitle"), text: t("serverText") },
  ];

  return (
    <>
      <section className="bg-brand-ivory py-16 lg:py-20">
        <Container>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-navy-700/85">{t("intro")}</p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-brand-navy-100 bg-white p-6"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-navy-50 text-brand-navy">
                  <topic.icon aria-hidden="true" className="size-5" strokeWidth={2} />
                </span>
                <h2 className="mt-4 text-xl font-bold text-brand-navy">{topic.title}</h2>
                <p className="mt-2 leading-7 text-brand-navy-700/85">{topic.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <SecuritySection />
      <CtaSection />
    </>
  );
}
