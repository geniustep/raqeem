/**
 * Client-safe constants. Only NEXT_PUBLIC_* variables are referenced here,
 * so this module can be imported from both Server and Client Components.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://raqeem.ma";

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.raqeem.ma";

export const SOCIAL_LINKS = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
} as const;

export const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID ?? "";

export const BRAND = {
  nameAr: "رقيم",
  nameLatin: "Raqeem",
  siteName: "رقيم | Raqeem",
  logo: "/brand/raqeem-logo.png",
  logoSmall: "/brand/raqeem-logo-small.png",
  logoWidth: 2549,
  logoHeight: 1227,
  logoSmallWidth: 767,
  logoSmallHeight: 1053,
} as const;
