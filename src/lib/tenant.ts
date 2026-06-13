/**
 * Client-safe tenant slug validation and URL building for platform login.
 * The domain root is fixed; user input is never used as a raw redirect target.
 */

export const TENANT_DOMAIN = "raqeem.ma";

const TENANT_SLUG_PATTERN = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const MAX_TENANT_SLUG_LENGTH = 63;

export function normalizeTenantSlug(input: string): string {
  return input.trim().toLowerCase();
}

export function isValidTenantSlug(slug: string): boolean {
  if (!slug || slug.length > MAX_TENANT_SLUG_LENGTH) {
    return false;
  }
  return TENANT_SLUG_PATTERN.test(slug);
}

export function parseTenantSlug(raw: string): string | null {
  const normalized = normalizeTenantSlug(raw);
  if (!normalized) {
    return null;
  }
  return isValidTenantSlug(normalized) ? normalized : null;
}

export function buildTenantLoginUrl(slug: string): string {
  return `https://${slug}.${TENANT_DOMAIN}/login`;
}

export function buildTenantApiUrl(slug: string): string {
  return `https://${slug}.${TENANT_DOMAIN}/api/tenant`;
}

export function isSafeTenantLoginUrl(slug: string, url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      parsed.hostname === `${slug}.${TENANT_DOMAIN}` &&
      parsed.pathname === "/login"
    );
  } catch {
    return false;
  }
}

export type TenantVerificationResult = "ok" | "not_found" | "network_error";

export async function verifyTenant(slug: string): Promise<TenantVerificationResult> {
  try {
    const params = new URLSearchParams({ slug });
    const response = await fetch(`/api/tenant-verify?${params.toString()}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (response.status === 400) {
      return "not_found";
    }
    if (response.status === 404 || response.status === 502) {
      return "not_found";
    }
    if (!response.ok) {
      return "network_error";
    }
    const data = (await response.json()) as { success?: boolean };
    return data.success === true ? "ok" : "not_found";
  } catch {
    return "network_error";
  }
}

export function redirectToTenantLogin(slug: string): void {
  const url = buildTenantLoginUrl(slug);
  if (!isSafeTenantLoginUrl(slug, url)) {
    return;
  }
  window.location.assign(url);
}
