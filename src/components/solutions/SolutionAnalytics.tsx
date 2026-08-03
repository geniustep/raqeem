"use client";

import { useEffect } from "react";
import type { SolutionLandingSlug } from "@/content/solution-landing-pages";
import type { Locale } from "@/i18n/routing";
import { track } from "@/lib/analytics";
import { readConversionAttribution } from "@/lib/conversion-attribution";

export function SolutionAnalytics({
  locale,
  slug,
}: {
  locale: Locale;
  slug: SolutionLandingSlug;
}) {
  useEffect(() => {
    const attribution = readConversionAttribution(window.location.search);

    track("solution_view", {
      locale,
      solution_slug: slug,
      entry_source: attribution.source,
      guide_slug: attribution.guideSlug,
    });
  }, [locale, slug]);

  return null;
}
