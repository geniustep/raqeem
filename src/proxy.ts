import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { locales, routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

const LEGACY_PUBLIC_ROOTS = new Set([
  "app",
  "solutions",
  "features",
  "institutions",
  "roles",
  "timetable",
  "security",
  "about",
  "demo",
  "contact",
  "faq",
  "guides",
  "privacy",
  "terms",
  "support",
  "data-deletion",
  "compliance",
  "privacy-center",
  "trust-center",
  "legal-notice",
  "cookies",
  "accessibility",
  "child-parent-data-notice",
  "data-processing-agreement",
  "subprocessors",
  "data-retention",
  "backup-recovery",
  "service-status",
  "service-level-agreement",
  "business-continuity",
  "disaster-recovery",
  "incident-response",
  "vulnerability-disclosure",
  "security-contact",
  "support-policy",
  "maintenance-policy",
  "security-whitepaper",
  "responsible-ai",
]);

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const firstSegment = pathname.split("/").filter(Boolean)[0] ?? "";
  const alreadyLocalized = locales.some((locale) => firstSegment === locale);

  if (!alreadyLocalized && LEGACY_PUBLIC_ROOTS.has(firstSegment)) {
    const destination = request.nextUrl.clone();
    destination.pathname = `/ar${pathname}`;
    const response = NextResponse.redirect(destination, 308);
    response.headers.set("x-raqeem-proxy", "redirect");
    return response;
  }

  const response = handleI18nRouting(request);
  response.headers.set("x-raqeem-proxy", "active");
  return response;
}

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
