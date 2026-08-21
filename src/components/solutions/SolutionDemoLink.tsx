"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { SolutionLandingSlug } from "@/content/solution-landing-pages";
import type { Locale } from "@/i18n/routing";
import { track } from "@/lib/analytics";
import {
  buildSolutionDemoHref,
  readConversionAttribution,
  type ConversionAttribution,
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
  const [attribution, setAttribution] = useState<ConversionAttribution>({ source: "site" });
  const href = buildSolutionDemoHref(locale, solutionSlug, attribution.guideSlug);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setAttribution(readConversionAttribution(window.location.search));
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        track("solution_demo_cta_click", {
          locale,
          solution_slug: solutionSlug,
          entry_source: attribution.source,
          guide_slug: attribution.guideSlug,
          destination: "demo",
        })
      }
    >
      {label}
    </Link>
  );
}
