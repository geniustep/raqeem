import { expect, test, type Page } from "@playwright/test";

async function fillValidDemoForm(page: Page) {
  await page.locator("#organizationName").fill("Atlas Test School");
  await page.locator("#organizationType").selectOption("school");
  await page.locator("#city").fill("Rabat");
  await page.locator("#estimatedStudentCount").selectOption("100_to_300");
  await page.locator("#fullName").fill("Test Director");
  await page.locator("#jobTitle").fill("Director");
  await page.locator("#phone").fill("+212600000000");
  await page.locator("#email").fill("director@example.com");
  await page.locator("#privacyConsent").check();
}

test.describe("demo request form", () => {
  test("shows errors for empty required fields", async ({ page }) => {
    await page.goto("/en/demo");
    await page.getByRole("button", { name: "Send request" }).click();
    const alerts = page.getByRole("alert");
    await expect(alerts.first()).toBeVisible();
    expect(await alerts.count()).toBeGreaterThanOrEqual(5);
  });

  test("rejects an invalid email", async ({ page }) => {
    await page.goto("/en/demo");
    await fillValidDemoForm(page);
    await page.locator("#email").fill("not-an-email");
    await page.getByRole("button", { name: "Send request" }).click();
    await expect(page.locator("#email-error")).toHaveText("Enter a valid email address");
  });

  test("rejects an invalid phone", async ({ page }) => {
    await page.goto("/en/demo");
    await fillValidDemoForm(page);
    await page.locator("#phone").fill("abc");
    await page.getByRole("button", { name: "Send request" }).click();
    await expect(page.locator("#phone-error")).toHaveText("Enter a valid phone number");
  });

  test("shows a success message on mocked success", async ({ page }) => {
    await page.route("**/api/demo-request", (route) =>
      route.fulfill({ json: { ok: true, message: "received" } }),
    );
    await page.goto("/en/demo");
    await fillValidDemoForm(page);
    await page.getByRole("button", { name: "Send request" }).click();
    await expect(page.getByRole("status")).toContainText("Your request has been received");
  });

  test("shows an error message on server failure", async ({ page }) => {
    await page.route("**/api/demo-request", (route) =>
      route.fulfill({ status: 500, json: { ok: false, message: "server_error" } }),
    );
    await page.goto("/en/demo");
    await fillValidDemoForm(page);
    await page.getByRole("button", { name: "Send request" }).click();
    await expect(page.getByText("The request could not be sent", { exact: false })).toBeVisible();
  });

  test("disables the submit button while sending and prevents duplicates", async ({ page }) => {
    let requests = 0;
    await page.route("**/api/demo-request", async (route) => {
      requests += 1;
      await new Promise((resolve) => setTimeout(resolve, 800));
      await route.fulfill({ json: { ok: true, message: "received" } });
    });
    await page.goto("/en/demo");
    await fillValidDemoForm(page);

    const submit = page.getByRole("button", { name: /Send request|Sending/ });
    await submit.click();
    await expect(submit).toBeDisabled();
    await submit.click({ force: true }).catch(() => undefined);
    await expect(page.getByRole("status")).toBeVisible();
    expect(requests).toBe(1);
  });

  test("works in Arabic (RTL)", async ({ page }) => {
    await page.route("**/api/demo-request", (route) =>
      route.fulfill({ json: { ok: true, message: "received" } }),
    );
    await page.goto("/ar/demo");
    await fillValidDemoForm(page);
    await page.getByRole("button", { name: "أرسل الطلب" }).click();
    await expect(page.getByRole("status")).toContainText("تم استلام طلبك");
  });
});

test.describe("contact form", () => {
  test("validates and submits with mocked success", async ({ page }) => {
    await page.route("**/api/contact", (route) =>
      route.fulfill({ json: { ok: true, message: "received" } }),
    );
    await page.goto("/en/contact");

    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByRole("alert").first()).toBeVisible();

    await page.locator("#contact-name").fill("Test Person");
    await page.locator("#contact-phone").fill("+212611111111");
    await page.locator("#contact-email").fill("person@example.com");
    await page.locator("#contact-subject").fill("Question about Raqeem");
    await page
      .locator("#contact-message")
      .fill("I would like more information about the platform.");
    await page.locator("#contact-privacyConsent").check();
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByRole("status")).toContainText("Your message has been sent");
  });
});
