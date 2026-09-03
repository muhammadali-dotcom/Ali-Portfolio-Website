import { test, expect } from "@playwright/test";

/**
 * E2E: Homepage — core layout, accessibility, and navigation.
 */
test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has the correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Muhammad Ali/i);
  });

  test("renders the hero heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Muhammad Ali/i, level: 1 })).toBeVisible();
  });

  test("skip-to-content link is present in the DOM", async ({ page }) => {
    const skipLink = page.getByRole("link", { name: /skip to main content/i });
    await expect(skipLink).toBeAttached();
  });

  test("skip-to-content link points to #main-content", async ({ page }) => {
    const skipLink = page.getByRole("link", { name: /skip to main content/i });
    await expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  test("main landmark has id=main-content", async ({ page }) => {
    await expect(page.locator("#main-content")).toBeAttached();
  });

  test("navbar is visible with the logo", async ({ page }) => {
    await expect(page.getByRole("link", { name: "ALI.DEV" })).toBeVisible();
  });

  test("has no console errors on load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(errors).toHaveLength(0);
  });
});
