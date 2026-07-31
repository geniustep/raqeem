import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { trustCenterPages } from "@/content/trust-center-page";
import { locales, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { OG_IMAGE } from "@/lib/metadata";

interface PageProps { params: Promise<{ locale: Locale }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = trustCenterPages[locale];
  const path = "/trust-center";
  const url = `${SITE_URL}/${locale}${path}`;
  const languages: Record<string, string> = {};
  for (const supportedLocale of locales) languages[supportedLocale] = `${SITE_URL}/${supportedLocale}${path}`;
  languages["x-default"] = `${SITE_URL}/ar${path}`;
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: url, languages },
    openGraph: { title: content.title, description: content.description, url, type: "website", images: [{ url: `${SITE_URL}${OG_IMAGE.url}`, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: "Raqeem" }] },
    twitter: { card: "summary_large_image", title: content.title, description: content.description, images: [`${SITE_URL}${OG_IMAGE.url}`] }
  };
}

export default async function TrustCenterPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = trustCenterPages[locale];
  return <>
    <section className="bg-brand-ivory py-16 lg:py-20"><Container className="max-w-4xl">
      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-navy text-white"><ShieldCheck aria-hidden="true" className="size-6" /></span>
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">{content.title}</h1>
      <p className="mt-5 text-lg leading-8 text-brand-navy-700/85">{content.description}</p>
      <p className="mt-4 text-sm text-brand-navy-700/65">{content.updated}</p>
      <p className="mt-8 rounded-2xl border border-brand-navy-100 bg-white p-5 leading-8 text-brand-navy-700/85">{content.intro}</p>
    </Container></section>
    <section className="py-16 lg:py-20"><Container className="max-w-6xl"><div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{content.links.map((item) => <Link key={item.href} href={`/${locale}${item.href}`} className="group rounded-2xl border border-brand-navy-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-teal-300 hover:shadow-lg"><div className="flex items-start justify-between gap-4"><h2 className="text-xl font-bold text-brand-navy">{item.title}</h2><ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-brand-teal-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div><p className="mt-3 leading-7 text-brand-navy-700/80">{item.description}</p></Link>)}</div></Container></section>
    <section className="pb-16 lg:pb-20"><Container className="max-w-4xl"><div className="rounded-3xl bg-brand-navy p-7 text-white sm:p-10"><h2 className="text-2xl font-bold">{content.contactTitle}</h2><p className="mt-4 leading-8 text-white/85">{content.contactText}</p><Link href={`/${locale}/contact`} className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-brand-navy">{content.contactAction}</Link></div></Container></section>
  </>;
}
