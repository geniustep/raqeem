import { expect, test } from "@playwright/test";

test.describe("desktop header", () => {
  test("navigates through main links", async ({ page }) => {
    await page.goto("/en");
    const header = page.locator("header");

    await header.getByRole("link", { name: "Solutions" }).click();
    await expect(page).toHaveURL(/\/en\/solutions$/);

    await header.getByRole("link", { name: "Features", exact: true }).click();
    await expect(page).toHaveURL(/\/en\/features$/);

    await header.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/en\/about$/);
  });

  test("institutions dropdown opens, navigates, and closes with Escape", async ({ page }) => {
    await page.goto("/en");
    const trigger = page.getByRole("button", { name: "Institutions" });
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");

    await trigger.click();
    await page.locator("#institutions-menu").getByRole("link", { name: "Schools" }).click();
    await expect(page).toHaveURL(/\/en\/institutions\/schools$/);
  });

  test("header CTA goes to the demo page", async ({ page }) => {
    await page.goto("/en");
    await page.locator("header").getByRole("link", { name: "Request a demo" }).click();
    await expect(page).toHaveURL(/\/en\/demo$/);
  });

  test("platform login button opens tenant modal", async ({ page }) => {
    await page.goto("/en");
    await page.locator("header").getByRole("button", { name: "Access the platform" }).click();
    await expect(page.getByRole("dialog", { name: "Sign in to Raqeem" })).toBeVisible();
  });

  test("footer internal links resolve", async ({ page, request }) => {
    await page.goto("/en");
    const hrefs = await page
      .locator("footer a[href^='/']")
      .evaluateAll((anchors) => anchors.map((a) => a.getAttribute("href")));
    const unique = [...new Set(hrefs.filter((href): href is string => !!href))];
    expect(unique.length).toBeGreaterThan(8);
    for (const href of unique) {
      const response = await request.get(href);
      expect(response.status(), `${href} should resolve`).toBe(200);
    }
  });
});

test.describe("mobile menu", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens, traps focus, closes with Escape, and restores scrolling", async ({ page }) => {
    await page.goto("/en");
    await page.getByRole("button", { name: "Open menu" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(page.locator("body")).toHaveCSS("overflow", "hidden");

    // Focus stays inside the drawer while tabbing.
    for (let i = 0; i < 30; i += 1) {
      await page.keyboard.press("Tab");
      const inside = await page.evaluate(() => {
        const active = document.activeElement;
        const dialogElement = document.querySelector("[role='dialog']");
        return !!dialogElement && !!active && dialogElement.contains(active);
      });
      expect(inside).toBe(true);
    }

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  });

  test("close button closes the drawer and links navigate", async ({ page }) => {
    await page.goto("/en");
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(page.getByRole("dialog")).toBeHidden();

    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("dialog").getByRole("link", { name: "FAQ" }).click();
    await expect(page).toHaveURL(/\/en\/faq$/);
  });
});
