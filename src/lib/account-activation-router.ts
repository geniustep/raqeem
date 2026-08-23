import "server-only";
import { TENANT_DOMAIN } from "./tenant";

const ACTIVATION_TENANT_PATTERN = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
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

function isValidActivationTenant(value: string): boolean {
  return value.length <= 63 && ACTIVATION_TENANT_PATTERN.test(value);
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
    !isValidActivationTenant(tenant) ||
    !isValidTokenPart(selector, MIN_SELECTOR_LENGTH, MAX_SELECTOR_LENGTH) ||
    !isValidTokenPart(secret, MIN_SECRET_LENGTH, MAX_SECRET_LENGTH)
  ) {
    return null;
  }

  return { tenant, token: rawToken };
}

export function buildActivationRedirectUrl(hint: ActivationTokenHint): URL {
  const destination = new URL(`https://${hint.tenant}.${TENANT_DOMAIN}/activate`);
  destination.hash = `token=${encodeURIComponent(hint.token)}`;
  return destination;
}
