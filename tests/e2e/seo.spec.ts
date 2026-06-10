import { expect, test } from "@playwright/test";

test("Arabic home page has the required metadata", async ({ page }) => {
  await page.goto("/ar");
  await expect(page).toHaveTitle(/رقيم/);

  const description = page.locator("meta[name='description']");
  await expect(description).toHaveAttribute("content", /رقيم/);

  const canonical = page.locator("link[rel='canonical']");
  await expect(canonical).toHaveAttribute("href", /\/ar$/);
});

test("hreflang alternates cover the four locales plus x-default", async ({ page }) => {
  await page.goto("/en/solutions");
  for (const locale of ["ar", "fr", "en", "es"]) {
    const alternate = page.locator(`link[rel='alternate'][hreflang='${locale}']`);
    await expect(alternate).toHaveAttribute("href", new RegExp(`/${locale}/solutions$`));
  }
  await expect(page.locator("link[rel='alternate'][hreflang='x-default']")).toHaveCount(1);
});

test("Open Graph and Twitter tags are present", async ({ page }) => {
  await page.goto("/en");
  await expect(page.locator("meta[property='og:title']")).toHaveCount(1);
  await expect(page.locator("meta[property='og:image']").first()).toHaveAttribute(
    "content",
    /og-image\.png/,
  );
  await expect(page.locator("meta[name='twitter:card']")).toHaveAttribute(
    "content",
    "summary_large_image",
  );
});

test("structured data includes Organization and FAQPage", async ({ page }) => {
  await page.goto("/en");
  const scripts = await page
    .locator("script[type='application/ld+json']")
    .evaluateAll((nodes) => nodes.map((node) => node.textContent ?? ""));
  const types = scripts
    .map((content) => {
      try {
        return (JSON.parse(content) as { "@type"?: string })["@type"] ?? "";
      } catch {
        return "";
      }
    })
    .filter(Boolean);
  expect(types).toContain("Organization");
  expect(types).toContain("WebSite");
  expect(types).toContain("SoftwareApplication");
  expect(types).toContain("FAQPage");
});

test("sitemap and robots respond", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("/ar");

  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("sitemap");
});

test("health endpoint returns ok", async ({ request }) => {
  const health = await request.get("/api/health");
  expect(health.status()).toBe(200);
  expect(await health.json()).toEqual({ ok: true });
});
