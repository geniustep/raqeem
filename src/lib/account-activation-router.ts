import "server-only";
import { isValidTenantSlug, TENANT_DOMAIN } from "./tenant";

const TOKEN_PART_PATTERN = /^[A-Za-z0-9_-]+$/;
const MIN_SELECTOR_LENGTH = 8;
const MAX_SELECTOR_LENGTH = 64;
const MIN_SECRET_LENGTH = 32;
const MAX_SECRET_LENGTH = 128;
const MAX_TOKEN_LENGTH = 256;

export interface ActivationTokenHint {
  tenant: string;
  token: string;
}

function isValidTokenPart(value: string, min: number, max: number): boolean {
  return value.length >= min && value.length <= max && TOKEN_PART_PATTERN.test(value);
}

export function parseActivationTokenHint(rawToken: string): ActivationTokenHint | null {
  if (!rawToken || rawToken.length > MAX_TOKEN_LENGTH || rawToken.trim() !== rawToken) {
    return null;
  }

  const parts = rawToken.split(".");
  if (parts.length !== 3) {
    return null;
  }

  const [tenant, selector, secret] = parts;
  if (
    !tenant ||
    !selector ||
    !secret ||
    !isValidTenantSlug(tenant) ||
    !isValidTokenPart(selector, MIN_SELECTOR_LENGTH, MAX_SELECTOR_LENGTH) ||
    !isValidTokenPart(secret, MIN_SECRET_LENGTH, MAX_SECRET_LENGTH)
  ) {
    return null;
  }

  return { tenant, token: rawToken };
}

export function activationAllowedTenants(): ReadonlySet<string> {
  const configured = process.env.RAQEEM_ACTIVATION_ALLOWED_TENANTS;
  const tenants = new Set<string>();

  // School is the only tenant approved for the current production rollout.
  // Other tenants remain fail-closed until explicitly configured.
  if (process.env.VERCEL_ENV === "production") {
    tenants.add("school");
  }

  if (configured) {
    for (const tenant of configured.split(",").map((value) => value.trim())) {
      if (isValidTenantSlug(tenant)) {
        tenants.add(tenant);
      }
    }
  }

  return tenants;
}

export function buildActivationRedirectUrl(hint: ActivationTokenHint): URL {
  const destination = new URL(`https://${hint.tenant}.${TENANT_DOMAIN}/activate`);
  destination.hash = `token=${encodeURIComponent(hint.token)}`;
  return destination;
}
