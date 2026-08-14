import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CommercialRolePage } from "@/components/sections/CommercialRolePage";
import { getCommercialRoleCopy } from "@/content/commercial-role-copy";
import type { Locale } from "@/i18n/routing";
import { buildLocalizedMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const role = getCommercialRoleCopy(locale).roles.finance;
  return buildLocalizedMetadata({
    locale,
    path: "/roles/finance",
    title: `${role.label} — ${role.title}`,
    description: role.description,
  });
}

export default async function FinanceRolePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CommercialRolePage locale={locale} roleKey="finance" />;
}
