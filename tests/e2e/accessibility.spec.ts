import { expect, test } from "@playwright/test";

test("skip link is the first focusable element and targets main", async ({ page }) => {
  await page.goto("/en");
  await page.keyboard.press("Tab");
  const skipLink = page.locator("a[href='#main']");
  await expect(skipLink).toBeFocused();
});

test("main landmark and logical heading order exist", async ({ page }) => {
  await page.goto("/en");
  await expect(page.locator("main#main")).toHaveCount(1);
  expect(await page.locator("h1").count()).toBe(1);
});

test("role tabs follow the ARIA tabs pattern with keyboard support", async ({ page }) => {
  await page.goto("/en");
  const tablist = page.getByRole("tablist");
  await expect(tablist).toBeVisible();

  const tabs = page.getByRole("tab");
  await expect(tabs).toHaveCount(4);
  await expect(tabs.first()).toHaveAttribute("aria-selected", "true");

  await tabs.first().focus();
  await page.keyboard.press("ArrowRight");
  await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
  await expect(tabs.nth(1)).toBeFocused();
  await expect(page.getByRole("tabpanel")).toBeVisible();

  await page.keyboard.press("End");
  await expect(tabs.nth(3)).toHaveAttribute("aria-selected", "true");
});

test("every demo form control has an associated label", async ({ page }) => {
  await page.goto("/en/demo");
  const ids = [
    "organizationName",
    "organizationType",
    "city",
    "estimatedStudentCount",
    "fullName",
    "jobTitle",
    "phone",
    "email",
    "preferredLanguage",
    "message",
    "privacyConsent",
  ];
  for (const id of ids) {
    await expect(page.locator(`label[for='${id}']`), `label for #${id}`).toHaveCount(1);
  }
});

test("language switcher select has an accessible name", async ({ page }) => {
  await page.goto("/en");
  const switcher = page.locator("#language-switcher");
  await expect(switcher).toHaveAccessibleName("Choose language");
});

test("images expose translated alt text", async ({ page }) => {
  await page.goto("/ar");
  const logo = page.locator("header img").first();
  await expect(logo).toHaveAttribute("alt", "شعار رقيم");
});
