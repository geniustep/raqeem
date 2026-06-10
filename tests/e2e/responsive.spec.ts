import { expect, test } from "@playwright/test";

const VIEWPORTS = [
  { name: "mobile-small", width: 320, height: 700 },
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
  { name: "desktop-wide", width: 1920, height: 1080 },
];

for (const viewport of VIEWPORTS) {
  test(`no horizontal scroll on /ar at ${viewport.name} (${viewport.width}px)`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/ar");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("h1")).toBeVisible();
  });
}

test("demo form remains usable on a small phone", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("/en/demo");
  await expect(page.locator("#organizationName")).toBeVisible();
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});
