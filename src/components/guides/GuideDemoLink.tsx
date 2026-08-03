"use client";

import Link from "next/link";
import type { Locale } from "@/i18n/routing";
import { track } from "@/lib/analytics";
import { buildGuideDemoHref } from "@/lib/conversion-attribution";

interface GuideDemoLinkProps {
  locale: Locale;
  slug: string;
  label: string;
  className?: string;
}

export function GuideDemoLink({ locale, slug, label, className }: GuideDemoLinkProps) {
  const href = buildGuideDemoHref(locale, slug);

  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        track("guide_demo_cta_click", {
          guide_slug: slug,
          locale,
          destination: "demo",
        })
      }
    >
      {label}
    </Link>
  );
}
