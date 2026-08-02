import type { Metadata } from "next";
import Link from "next/link";
import {
  DatabaseZap,
  FileLock2,
  History,
  KeyRound,
  LockKeyhole,
  Server,
  ShieldCheck,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { GuideLinksSection } from "@/components/guides/GuideLinksSection";
import { CorePageSummary } from "@/components/sections/CorePageSummary";
import { Container } from "@/components/ui/Container";
import { getCorePageContent } from "@/content/core-pages";
import { securityPages } from "@/content/security-page";
import type { Locale } from "@/i18n/routing";
import { buildLocalizedMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

const icons = [
  UserRoundCheck,
  UsersRound,
  LockKeyhole,
  FileLock2,
  ShieldCheck,
  History,
  KeyRound,
  DatabaseZap,
  Server,
  UserRoundCheck,
] as const;

const relatedGuideSlugs = [
  "school-data-isolation",
  "choosing-school-management-system",
] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = getCorePageContent(locale, "security") ?? securityPages[locale];

  return buildLocalizedMetadata({
    locale,
    path: "/security",
    title: content.title,
    description: content.description,
  });
}

export default async function SecurityPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = securityPages[locale];

  return (
    <>
      <section className="bg-brand-ivory py-16 lg:py-20">
        <Container className="max-w-4xl">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-navy text-white">
            <ShieldCheck aria-hidden="true" className="size-6" strokeWidth={2} />
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-navy-700/85">
            {content.description}
          </p>
          <p className="mt-4 text-sm text-brand-navy-700/65">{content.updated}</p>
          <p className="mt-8 rounded-2xl border border-brand-navy-100 bg-white p-5 leading-7 text-brand-navy-700/85">
            {content.notice}
          </p>
        </Container>
      </section>

      <CorePageSummary locale={locale} page="security" />

      <section className="py-16 lg:py-20">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {content.sections.map((section, index) => {
              const Icon = icons[index] ?? ShieldCheck;
              return (
                <article
                  key={section.title}
                  className="rounded-2xl border border-brand-navy-100 bg-white p-6"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-navy-50 text-brand-navy">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
                  </span>
                  <h2 className="mt-4 text-xl font-bold text-brand-navy">{section.title}</h2>
                  <p className="mt-3 leading-8 text-brand-navy-700/85">{section.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <GuideLinksSection locale={locale} slugs={relatedGuideSlugs} />

      <section className="pb-16 lg:pb-20">
        <Container className="max-w-4xl">
          <div className="rounded-3xl bg-brand-navy p-7 text-white sm:p-10">
            <h2 className="text-2xl font-bold">{content.reportTitle}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/85">{content.reportText}</p>
            <Link
              href={`/${locale}/contact`}
              className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-brand-navy transition hover:bg-brand-ivory"
            >
              {content.reportAction}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
