"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CatalogGuideSlug } from "@/content/guide-solution-links";
import type { SolutionLandingSlug } from "@/content/solution-landing-pages";
import type { Locale } from "@/i18n/routing";
import { track } from "@/lib/analytics";
import {
  buildSolutionDemoHref,
  readConversionAttribution,
} from "@/lib/conversion-attribution";

interface SolutionDemoLinkProps {
  locale: Locale;
  solutionSlug: SolutionLandingSlug;
  label: string;
  className?: string;
}

export function SolutionDemoLink({
  locale,
  solutionSlug,
  label,
  className,
}: SolutionDemoLinkProps) {
  const [sourceGuideSlug, setSourceGuideSlug] = useState<CatalogGuideSlug | undefined>();
  const [entrySource, setEntrySource] = useState<"guide" | "solution" | "site">("site");
  const href = buildSolutionDemoHref(locale, solutionSlug, sourceGuideSlug);

  useEffect(() => {
    const attribution = readConversionAttribution(window.location.search);
    setSourceGuideSlug(attribution.guideSlug);
    setEntrySource(attribution.source);
  }, []);

  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        track("solution_demo_cta_click", {
          locale,
          solution_slug: solutionSlug,
          entry_source: entrySource,
          guide_slug: sourceGuideSlug,
          destination: "demo",
        })
      }
    >
      {label}
    </Link>
  );
}
