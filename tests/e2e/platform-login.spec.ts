import { expect, test } from "@playwright/test";

function tenantVerifyRoute(body: { success: boolean }, status = 200) {
  return {
    status,
    contentType: "application/json",
    body: JSON.stringify(body),
  };
}

async function openPlatformLogin(page: import("@playwright/test").Page) {
  await page.locator("header").getByRole("button", { name: "Access the platform" }).click();
  return page.getByRole("dialog", { name: "Sign in to Raqeem" });
}

test.describe("platform login modal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
  });

  test("opens from header and closes with Escape and close button", async ({ page }) => {
    const dialog = await openPlatformLogin(page);
    await expect(dialog).toBeVisible();
    await expect(dialog.getByLabel("Institution code")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();

    await openPlatformLogin(page);
    await dialog.getByRole("button", { name: "Close" }).click();
    await expect(dialog).toBeHidden();
  });

  test("redirects valid tenants to login URL", async ({ page }) => {
    await page.route("**/api/tenant-verify**", async (route) => {
      const slug = new URL(route.request().url()).searchParams.get("slug");
      if (slug === "school" || slug === "nibras") {
        await route.fulfill(tenantVerifyRoute({ success: true }));
        return;
      }
      await route.fulfill(tenantVerifyRoute({ success: false }, 404));
    });

    await openPlatformLogin(page);
    const dialog = page.getByRole("dialog", { name: "Sign in to Raqeem" });

    await dialog.getByLabel("Institution code").fill("school");
    await Promise.all([
      page.waitForURL("https://school.raqeem.ma/login", { waitUntil: "commit" }),
      dialog.getByRole("button", { name: "Continue" }).click(),
    ]);

    await page.goto("/en");
    await openPlatformLogin(page);
    await dialog.getByLabel("Institution code").fill("nibras");
    await Promise.all([
      page.waitForURL("https://nibras.raqeem.ma/login", { waitUntil: "commit" }),
      dialog.getByRole("button", { name: "Continue" }).click(),
    ]);
  });

  test("normalizes uppercase slugs", async ({ page }) => {
    await page.route("**/api/tenant-verify**", (route) =>
      route.fulfill(tenantVerifyRoute({ success: true })),
    );

    await openPlatformLogin(page);
    const dialog = page.getByRole("dialog", { name: "Sign in to Raqeem" });
    await dialog.getByLabel("Institution code").fill("SCHOOL");
    await Promise.all([
      page.waitForURL("https://school.raqeem.ma/login", { waitUntil: "commit" }),
      dialog.getByRole("button", { name: "Continue" }).click(),
    ]);
  });

  test("submits with Enter key", async ({ page }) => {
    await page.route("**/api/tenant-verify**", (route) =>
      route.fulfill(tenantVerifyRoute({ success: true })),
    );

    await openPlatformLogin(page);
    const dialog = page.getByRole("dialog", { name: "Sign in to Raqeem" });
    await dialog.getByLabel("Institution code").fill("school");
    await Promise.all([
      page.waitForURL("https://school.raqeem.ma/login", { waitUntil: "commit" }),
      dialog.getByLabel("Institution code").press("Enter"),
    ]);
  });

  test("rejects invalid slugs", async ({ page }) => {
    await openPlatformLogin(page);
    const dialog = page.getByRole("dialog", { name: "Sign in to Raqeem" });
    const input = dialog.getByLabel("Institution code");

    await input.fill("");
    await dialog.getByRole("button", { name: "Continue" }).click();
    await expect(dialog.getByRole("alert")).toHaveText("Please enter a valid institution code");

    await input.fill("school name");
    await dialog.getByRole("button", { name: "Continue" }).click();
    await expect(dialog.getByRole("alert")).toHaveText("Please enter a valid institution code");

    await input.fill("school_name");
    await dialog.getByRole("button", { name: "Continue" }).click();
    await expect(dialog.getByRole("alert")).toHaveText("Please enter a valid institution code");

    await input.fill("school.demo");
    await dialog.getByRole("button", { name: "Continue" }).click();
    await expect(dialog.getByRole("alert")).toHaveText("Please enter a valid institution code");
  });

  test("shows not-found message for missing tenants", async ({ page }) => {
    await page.route("**/api/tenant-verify**", (route) =>
      route.fulfill(tenantVerifyRoute({ success: false }, 404)),
    );

    await openPlatformLogin(page);
    const dialog = page.getByRole("dialog", { name: "Sign in to Raqeem" });
    await dialog.getByLabel("Institution code").fill("missing");
    await dialog.getByRole("button", { name: "Continue" }).click();
    await expect(dialog.getByRole("alert")).toHaveText(
      "Institution code not found or unavailable",
    );
    await expect(page).toHaveURL(/\/en$/);
  });

  test("shows not-found message on network failure", async ({ page }) => {
    await page.route("**/api/tenant-verify**", (route) =>
      route.fulfill(tenantVerifyRoute({ success: false }, 502)),
    );

    await openPlatformLogin(page);
    const dialog = page.getByRole("dialog", { name: "Sign in to Raqeem" });
    await dialog.getByLabel("Institution code").fill("offline");
    await dialog.getByRole("button", { name: "Continue" }).click();
    await expect(dialog.getByRole("alert")).toHaveText(
      "Institution code not found or unavailable",
    );
  });

  test("shows loading state while verifying", async ({ page }) => {
    let releaseVerify: (() => void) | undefined;
    const verifyGate = new Promise<void>((resolve) => {
      releaseVerify = resolve;
    });

    await page.route("**/api/tenant-verify**", async (route) => {
      await verifyGate;
      await route.fulfill(tenantVerifyRoute({ success: true }));
    });

    await openPlatformLogin(page);
    const dialog = page.getByRole("dialog", { name: "Sign in to Raqeem" });
    const input = dialog.getByLabel("Institution code");
    await input.fill("school");

    await Promise.all([
      page.waitForRequest((request) => request.url().includes("/api/tenant-verify")),
      input.press("Enter"),
    ]);

    await expect(dialog.locator("form[aria-busy='true']")).toBeVisible();
    releaseVerify?.();
  });
});

test.describe("platform login modal — mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens from mobile menu", async ({ page }) => {
    await page.goto("/en");
    await page.getByRole("button", { name: "Open menu" }).click();
    await page
      .getByRole("dialog", { name: "Main menu" })
      .getByRole("button", { name: "Access the platform" })
      .click();
    await expect(page.getByRole("dialog", { name: "Sign in to Raqeem" })).toBeVisible();
  });
});

test.describe("platform login modal — RTL", () => {
  test("renders Arabic copy with RTL layout", async ({ page }) => {
    await page.goto("/ar");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await page.locator("header").getByRole("button", { name: "الدخول إلى المنصة" }).click();
    const dialog = page.getByRole("dialog", { name: "الدخول إلى رقيم" });
    await expect(dialog.getByText("رمز المؤسسة")).toBeVisible();
    await expect(dialog.getByRole("button", { name: "متابعة" })).toBeVisible();
  });
});
