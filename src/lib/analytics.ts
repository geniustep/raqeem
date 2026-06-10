import { ANALYTICS_ID } from "./constants";

/**
 * Privacy-first, pluggable analytics layer.
 *
 * - Disabled entirely unless NEXT_PUBLIC_ANALYTICS_ID is set.
 * - Only event names are tracked — never form contents, names, phones, or emails.
 * - Events are pushed to a generic dataLayer that any provider can consume,
 *   so no third-party script is loaded by this module itself.
 */

export type AnalyticsEvent =
  | "page_view"
  | "demo_cta_click"
  | "demo_submit_success"
  | "contact_submit_success"
  | "language_change"
  | "login_open";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: AnalyticsEvent): void {
  if (!ANALYTICS_ID || typeof window === "undefined") {
    return;
  }
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, analyticsId: ANALYTICS_ID });
}
