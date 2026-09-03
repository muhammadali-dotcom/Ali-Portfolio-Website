import { test, expect } from "@playwright/test";

/**
 * E2E: Cookie consent banner — visibility, dismissal, and persistence
 * across reloads via localStorage.
 */
test.describe("Cookie consent banner", () => {
  test("shows on first visit with a working Privacy Policy link", async ({ page }) => {
    await page.goto("/");
    const banner = page.getByText(/this site uses cookies/i);
    await expect(banner).toBeVisible();

    const link = page.getByRole("region", { name: /cookie notice/i }).getByRole("link", {
      name: /privacy policy/i,
    });
    await expect(link).toHaveAttribute("href", "/privacy-policy");
  });

  test("dismissing hides the banner and it stays hidden after reload", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/this site uses cookies/i)).toBeVisible();

    await page.getByRole("button", { name: /dismiss cookie notice/i }).click();
    await expect(page.getByText(/this site uses cookies/i)).not.toBeVisible();

    await page.reload();
    await expect(page.getByText(/this site uses cookies/i)).not.toBeVisible();
  });
});
