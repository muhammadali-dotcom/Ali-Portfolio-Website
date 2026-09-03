import { test, expect } from "@playwright/test";

/**
 * E2E: Privacy Policy page — loads directly and renders all sections.
 */
test.describe("Privacy Policy page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/privacy-policy");
  });

  test("has the correct page title and heading", async ({ page }) => {
    await expect(page).toHaveTitle(/Privacy Policy/i);
    await expect(page.getByRole("heading", { name: /privacy policy/i, level: 1 })).toBeVisible();
  });

  test("renders all numbered sections", async ({ page }) => {
    const titles = [
      /1\. Introduction/i,
      /2\. Information I Collect/i,
      /3\. Cookies/i,
      /4\. How I Use Your Information/i,
      /5\. How Information Is Shared/i,
      /6\. Data Retention/i,
      /7\. Your Rights/i,
      /8\. Security/i,
      /9\. Children's Privacy/i,
      /10\. Changes to This Policy/i,
      /11\. Contact/i,
    ];

    for (const title of titles) {
      await expect(page.getByRole("heading", { name: title })).toBeVisible();
    }
  });
});
