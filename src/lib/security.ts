import "server-only";
import { getEnv } from "./env";

/**
 * Pluggable rate limiting for the public form endpoints.
 *
 * The default implementation keeps counters in memory, which is enough for a
 * single instance. Swap `formRateLimiter` for a Redis/Upstash-backed
 * implementation of `RateLimiter` when running multiple instances.
 */

export interface RateLimiter {
  check(key: string): Promise<{ allowed: boolean }>;
}

interface MemoryRateLimiterOptions {
  windowMs: number;
  max: number;
}

class MemoryRateLimiter implements RateLimiter {
  private readonly hits = new Map<string, { count: number; resetAt: number }>();

  constructor(private readonly options: MemoryRateLimiterOptions) {}

  check(key: string): Promise<{ allowed: boolean }> {
    const now = Date.now();
    const entry = this.hits.get(key);

    if (!entry || entry.resetAt <= now) {
      this.hits.set(key, { count: 1, resetAt: now + this.options.windowMs });
      this.prune(now);
      return Promise.resolve({ allowed: true });
    }

    entry.count += 1;
    return Promise.resolve({ allowed: entry.count <= this.options.max });
  }

  private prune(now: number): void {
    if (this.hits.size < 1000) {
      return;
    }
    for (const [key, entry] of this.hits) {
      if (entry.resetAt <= now) {
        this.hits.delete(key);
      }
    }
  }
}

export const formRateLimiter: RateLimiter = new MemoryRateLimiter({
  windowMs: 60_000,
  max: 5,
});

export function clientIpFrom(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return first && first.length > 0 ? first : "unknown";
}

/**
 * Verifies a Cloudflare Turnstile token. When Turnstile is not configured
 * (no secret key), verification is skipped and the request is allowed.
 */
export async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret = getEnv().TURNSTILE_SECRET_KEY;
  if (!secret) {
    return true;
  }
  if (!token) {
    return false;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
    });
    if (!response.ok) {
      return false;
    }
    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch {
    return false;
  }
}
