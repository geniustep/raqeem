import { expect, test } from "@playwright/test";

const SELECTOR = "selector_12345678";
const SECRET = "secret_12345678901234567890123456789012";

function token(tenant: string): string {
  return `${tenant}.${SELECTOR}.${SECRET}`;
}

test.describe("account activation welcome router", () => {
  test("redirects an allowlisted tenant with the token in the fragment only", async ({
    request,
  }) => {
    const activationToken = token("school");
    const response = await request.get(`/welcome/${activationToken}`, { maxRedirects: 0 });

    expect(response.status()).toBe(302);
    expect(response.headers()["location"]).toBe(
      `https://school.raqeem.ma/activate#token=${activationToken}`,
    );
    expect(response.headers()["location"]).not.toContain("?token=");
    expect(response.headers()["cache-control"]).toContain("no-store");
    expect(response.headers()["referrer-policy"]).toBe("no-referrer");
    expect(response.headers()["x-robots-tag"]).toBe("noindex, nofollow, noarchive");
  });

  test("routes another explicitly allowlisted tenant without locale rewriting", async ({
    request,
  }) => {
    const activationToken = token("nibras");
    const response = await request.get(`/welcome/${activationToken}`, { maxRedirects: 0 });

    expect(response.status()).toBe(302);
    expect(response.headers()["location"]).toBe(
      `https://nibras.raqeem.ma/activate#token=${activationToken}`,
    );
  });

  for (const [caseIndex, invalidToken] of [
    `${SELECTOR}.${SECRET}`,
    `school.extra.${SELECTOR}.${SECRET}`,
    token("SCHOOL"),
    token("school_demo"),
    token("school.demo"),
    token("-school"),
    token("school-"),
    token("a".repeat(64)),
    "https://school.raqeem.ma/activate",
    `school/${SELECTOR}/${SECRET}`,
    `school.${SELECTOR}.${SECRET}?next=https://example.com`,
    `school.${SELECTOR}.short`,
    ` school.${SELECTOR}.${SECRET}`,
  ].entries()) {
    test(`fails closed for malformed token #${caseIndex + 1} ${JSON.stringify(invalidToken.slice(0, 24))}`, async ({
      request,
    }) => {
      const response = await request.get(`/welcome/${encodeURIComponent(invalidToken)}`, {
        maxRedirects: 0,
      });

      expect(response.status()).toBe(404);
      expect(await response.json()).toEqual({ error: "activation_failed" });
      expect(response.headers()["location"]).toBeUndefined();
      expect(response.headers()["cache-control"]).toContain("no-store");
    });
  }

  test("rejects a valid but non-allowlisted tenant without an open redirect", async ({
    request,
  }) => {
    const response = await request.get(`/welcome/${token("unknown")}`, { maxRedirects: 0 });

    expect(response.status()).toBe(404);
    expect(response.headers()["location"]).toBeUndefined();
    expect(await response.json()).toEqual({ error: "activation_failed" });
  });

  test("rejects double-encoded separators", async ({ request }) => {
    const doubleEncoded = token("school").replaceAll(".", "%252E");
    const response = await request.get(`/welcome/${doubleEncoded}`, { maxRedirects: 0 });

    expect(response.status()).toBe(404);
    expect(response.headers()["location"]).toBeUndefined();
  });
});
