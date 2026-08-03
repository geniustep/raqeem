import { ANALYTICS_ID } from "./constants";

/**
 * Privacy-first, pluggable analytics layer.
 *
 * - Disabled entirely unless NEXT_PUBLIC_ANALYTICS_ID is set.
 * - Never pass form contents, names, phones, emails, or other personal data.
 * - Events are pushed to a generic dataLayer that any provider can consume,
 *   so no third-party script is loaded by this module itself.
 */

export type AnalyticsEvent =
  | "page_view"
  | "demo_cta_click"
  | "demo_view"
  | "demo_submit_success"
  | "contact_submit_success"
  | "language_change"
  | "login_open"
  | "guide_view"
  | "guide_solution_click"
  | "guide_demo_cta_click"
  | "solution_view"
  | "solution_demo_cta_click"
  | "web_vital";

type AnalyticsValue = string | number | boolean;
export type AnalyticsProperties = Record<string, AnalyticsValue | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: AnalyticsEvent, properties: AnalyticsProperties = {}): void {
  if (!ANALYTICS_ID || typeof window === "undefined") {
    return;
  }

  const safeProperties = Object.fromEntries(
    Object.entries(properties).filter((entry): entry is [string, AnalyticsValue] => {
      const value = entry[1];
      return value !== undefined;
    }),
  );

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ ...safeProperties, event, analyticsId: ANALYTICS_ID });
}
