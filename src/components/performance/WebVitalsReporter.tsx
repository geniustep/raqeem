"use client";

import { useReportWebVitals } from "next/web-vitals";
import { track } from "@/lib/analytics";

type ReportWebVitalsCallback = Parameters<typeof useReportWebVitals>[0];

const reportWebVital: ReportWebVitalsCallback = (metric) => {
  track("web_vital", {
    metric: metric.name,
    value: metric.value,
    delta: metric.delta,
    rating: metric.rating,
    metricId: metric.id,
  });
};

export function WebVitalsReporter() {
  useReportWebVitals(reportWebVital);
  return null;
}
