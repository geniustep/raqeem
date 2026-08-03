"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/routing";
import { track } from "@/lib/analytics";

function referrerDomain(): string {
  if (!document.referrer) {
    return "direct";
  }

  try {
    return new URL(document.referrer).hostname || "direct";
  } catch {
    return "unknown";
  }
}

export function GuideAnalytics({ locale, slug }: { locale: Locale; slug: string }) {
  useEffect(() => {
    track("guide_view", {
      guide_slug: slug,
      locale,
      referrer_domain: referrerDomain(),
    });
  }, [locale, slug]);

  return null;
}
