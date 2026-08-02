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
    const params = new URLSearchParams(window.location.search);

    track("guide_view", {
      guide_slug: slug,
      locale,
      referrer_domain: referrerDomain(),
      utm_source: params.get("utm_source") ?? undefined,
      utm_medium: params.get("utm_medium") ?? undefined,
      utm_campaign: params.get("utm_campaign") ?? undefined,
    });
  }, [locale, slug]);

  return null;
}
