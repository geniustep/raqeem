import { expect, test, type APIRequestContext } from "@playwright/test";

const SELECTOR = "selector_12345678";
const SECRET = "secret_12345678901234567890123456789012";

function token(tenant: string): string {
  return `${tenant}.${SELECTOR}.${SECRET}`;
}

async function expectTenantRedirect(
  request: APIRequestContext,
  route: "activate" | "welcome",
  tenant: string,
) {
  const activationToken = token(tenant);
  const response = await request.get(`/${route}/${activationToken}`, { maxRedirects: 0 });

  expect(response.status()).toBe(302);
  expect(response.headers()["location"]).toBe(
    `https://${tenant}.raqeem.ma/activate#token=${activationToken}`,
  );
  expect(response.headers()["location"]).not.toContain("?token=");
  expect(response.headers()["cache-control"]).toContain("no-store");
  expect(response.headers()["referrer-policy"]).toBe("no-referrer");
  expect(response.headers()["x-robots-tag"]).toBe("noindex, nofollow, noarchive");
}

test.describe("central account activation router", () => {
  test("routes the live /activate contract to Nibras before locale rewriting", async ({
    request,
  }) => {
    await expectTenantRedirect(request, "activate", "nibras");
  });

  test("routes Alwah generically without a tenant-specific code change", async ({ request }) => {
    await expectTenantRedirect(request, "activate", "alwah");
  });

  test("keeps the legacy /welcome activation contract working", async ({ request }) => {
    await expectTenantRedirect(request, "welcome", "school");
  });

  test("keeps every syntactically valid tenant destination pinned to raqeem.ma", async ({
    request,
  }) => {
    const activationToken = token("future-school");
    const response = await request.get(`/activate/${activationToken}`, { maxRedirects: 0 });

    expect(response.status()).toBe(302);
    const location = new URL(response.headers()["location"] ?? "");
    expect(location.protocol).toBe("https:");
    expect(location.hostname).toBe("future-school.raqeem.ma");
    expect(location.pathname).toBe("/activate");
    expect(location.hash).toBe(`#token=${activationToken}`);
  });

  for (const [caseIndex, invalidToken] of [
    "",
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
    test(`fails closed for malformed activation input #${caseIndex + 1}`, async ({ request }) => {
      const path = invalidToken ? `/activate/${encodeURIComponent(invalidToken)}` : "/activate";
      const response = await request.get(path, { maxRedirects: 0 });

      expect(response.status()).toBe(404);
      expect(response.headers()["location"]).toBeUndefined();
      expect(response.headers()["cache-control"]).toContain("no-store");
      expect(response.headers()["referrer-policy"]).toBe("no-referrer");
      expect(response.headers()["content-type"]).toContain("text/html");
      const body = await response.text();
      expect(body).toContain("تعذّر فتح رابط التفعيل");
      expect(body).not.toContain(SECRET);
    });
  }

  test("rejects double-encoded separators", async ({ request }) => {
    const doubleEncoded = token("school").replaceAll(".", "%252E");
    const response = await request.get(`/activate/${doubleEncoded}`, { maxRedirects: 0 });

    expect(response.status()).toBe(404);
    expect(response.headers()["location"]).toBeUndefined();
  });
});
