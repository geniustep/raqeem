import { expect, test } from "@playwright/test";

const LOCALES: Array<{ locale: string; dir: "rtl" | "ltr" }> = [
  { locale: "ar", dir: "rtl" },
  { locale: "fr", dir: "ltr" },
  { locale: "en", dir: "ltr" },
  { locale: "es", dir: "ltr" },
];

for (const { locale, dir } of LOCALES) {
  test(`renders /${locale} with correct lang and dir`, async ({ page }) => {
    await page.goto(`/${locale}`);
    const html = page.locator("html");
    await expect(html).toHaveAttribute("lang", locale);
    await expect(html).toHaveAttribute("dir", dir);
    await expect(page.locator("h1")).toBeVisible();
  });
}

test("root path redirects to the default locale (ar)", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/ar$/);
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
});

test("language switcher keeps the equivalent path", async ({ page }) => {
  await page.goto("/ar/about");
  await page.locator("#language-switcher").selectOption("fr");
  await expect(page).toHaveURL(/\/fr\/about$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
});

test("switching back to Arabic restores RTL", async ({ page }) => {
  await page.goto("/en/solutions");
  await page.locator("#language-switcher").selectOption("ar");
  await expect(page).toHaveURL(/\/ar\/solutions$/);
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
});
