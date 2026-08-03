"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { SolutionLandingSlug } from "@/content/solution-landing-pages";
import type { Locale } from "@/i18n/routing";
import { track } from "@/lib/analytics";
import { buildGuideToSolutionHref } from "@/lib/conversion-attribution";

interface TrackedSolutionLinkProps {
  locale: Locale;
  solutionSlug: SolutionLandingSlug;
  sourceGuideSlug?: string;
  className?: string;
  children: ReactNode;
}

export function TrackedSolutionLink({
  locale,
  solutionSlug,
  sourceGuideSlug,
  className,
  children,
}: TrackedSolutionLinkProps) {
  const href = sourceGuideSlug
    ? buildGuideToSolutionHref(locale, solutionSlug, sourceGuideSlug)
    : `/${locale}/solutions/${solutionSlug}`;

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (!sourceGuideSlug) {
          return;
        }

        track("guide_solution_click", {
          locale,
          guide_slug: sourceGuideSlug,
          solution_slug: solutionSlug,
        });
      }}
    >
      {children}
    </Link>
  );
}
