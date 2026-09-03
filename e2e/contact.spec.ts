import { test, expect } from "@playwright/test";

/**
 * E2E: Contact form — rendering, client-side validation, and honeypot.
 * Does not submit for real (would hit the live Gmail account).
 */
test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("renders the name, email, and message fields", async ({ page }) => {
    await expect(page.getByLabel(/your name/i)).toBeVisible();
    await expect(page.getByLabel(/your email/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
  });

  test("blocks submission when required fields are empty", async ({ page }) => {
    await page.getByRole("button", { name: /send message/i }).click();
    // Native HTML5 validation keeps the browser on the page — no "sending" state appears.
    await expect(page.getByRole("button", { name: /sending/i })).toHaveCount(0);
  });

  test("honeypot field exists but is positioned off-screen", async ({ page }) => {
    const honeypot = page.getByLabel(/company/i);
    await expect(honeypot).toBeAttached();
    await expect(honeypot).toHaveAttribute("tabindex", "-1");
    const box = await honeypot.boundingBox();
    expect(box?.x).toBeLessThan(0);
  });
});
