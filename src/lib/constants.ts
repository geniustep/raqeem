/**
 * Client-safe constants. Only NEXT_PUBLIC_* variables are referenced here,
 * so this module can be imported from both Server and Client Components.
 */

// Canonical URLs must match the public host that serves content without a redirect.
// The apex domain permanently redirects to www in production.
export const SITE_URL = "https://www.raqeem.ma";

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.raqeem.ma";

export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=ma.raqeem.app";

export const SOCIAL_LINKS = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
} as const;

export const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID ?? "";

export const BRAND = {
  nameAr: "رقيم",
  nameLatin: "Raqeem",
  siteName: "Raqeem",
  logo: "/brand/raqeem-logo.png",
  logoSmall: "/brand/raqeem-logo-small.png",
  logoWidth: 2549,
  logoHeight: 1227,
  logoSmallWidth: 767,
  logoSmallHeight: 1053,
} as const;
