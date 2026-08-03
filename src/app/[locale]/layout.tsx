import type { Metadata, Viewport } from "next";
import { Inter, Noto_Kufi_Arabic, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { WebVitalsReporter } from "@/components/performance/WebVitalsReporter";
import { JsonLd } from "@/components/seo/JsonLd";
import { RouteBreadcrumbJsonLd } from "@/components/seo/RouteBreadcrumbJsonLd";
import { getEntityProfile } from "@/content/entity-profile";
import { localeDirections, routing, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";
import { brandJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi-arabic",
  display: "swap",
  preload: false,
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-sans-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const entity = getEntityProfile(locale as Locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: entity.descriptor,
      template: `%s | ${entity.name}`,
    },
    description: entity.description,
    applicationName: entity.name,
    icons: {
      icon: [
        { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#2D395F",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const typedLocale = locale as Locale;
  const direction = localeDirections[typedLocale];
  const entity = getEntityProfile(typedLocale);

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${inter.variable} ${notoKufiArabic.variable} ${notoSansArabic.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <JsonLd data={organizationJsonLd({ name: entity.name, description: entity.description })} />
        <JsonLd data={brandJsonLd({ name: entity.name, description: entity.description })} />
        <JsonLd data={websiteJsonLd({ name: entity.name, description: entity.description })} />
        <WebVitalsReporter />
        <NextIntlClientProvider>
          <RouteBreadcrumbJsonLd locale={typedLocale} />
          <SkipLink />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
