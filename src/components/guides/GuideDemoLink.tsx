"use client";

import Link from "next/link";
import type { Locale } from "@/i18n/routing";
import { track } from "@/lib/analytics";

interface GuideDemoLinkProps {
  locale: Locale;
  slug: string;
  label: string;
  className?: string;
}

export function GuideDemoLink({ locale, slug, label, className }: GuideDemoLinkProps) {
  const href = `/${locale}/demo?utm_source=raqeem_guides&utm_medium=internal&utm_campaign=${encodeURIComponent(slug)}`;

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
