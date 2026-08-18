import type { Metadata } from "next";
import { ExpandedSolutionLanding } from "@/components/solutions/ExpandedSolutionLanding";
import { getExpandedSolutionLanding } from "@/content/solution-expansion-pages";
import type { Locale } from "@/i18n/routing";
import { buildLocalizedMetadata } from "@/lib/metadata";
interface PageProps { params: Promise<{ locale: Locale }> }
const slug = "international-schools" as const;
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { locale } = await params; const content = getExpandedSolutionLanding(locale, slug); if (!content) return {}; return buildLocalizedMetadata({ locale, path: `/solutions/${slug}`, title: content.title, description: content.description }); }
export default async function Page({ params }: PageProps) { const { locale } = await params; return <ExpandedSolutionLanding locale={locale} slug={slug} />; }
