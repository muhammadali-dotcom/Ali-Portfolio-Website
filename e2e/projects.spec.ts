import { test, expect } from "@playwright/test";

/**
 * E2E: Projects section — card renders and modal opens correctly.
 */
test.describe("Projects section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects");
  });

  test("renders at least one project card", async ({ page }) => {
    // Each project card has an h3 heading with the project title
    const cards = page.locator("h3");
    await expect(cards.first()).toBeVisible();
  });

  test("projects page has a heading", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("project card opens detail page or modal on click", async ({ page }) => {
    const firstCard = page.locator("[data-cursor='card']").first();

    // On /projects, cards render with a "Case Study" link to the detail page;
    // elsewhere (e.g. the homepage), cards without linkToDetail open a modal instead.
    const caseStudyLink = page.locator("a", { hasText: "Case Study" }).first();

    if (await caseStudyLink.count()) {
      await caseStudyLink.click();
      await page.waitForURL(/\/projects\/.+/);
      await expect(page).not.toHaveURL("/projects");
    } else {
      // modal card — clicking the card itself opens an in-page dialog
      await firstCard.click();
      const dialog = page.getByRole("dialog");
      await expect(dialog).toBeVisible();

      // Dialog has a close button
      const closeBtn = page.getByRole("button", { name: /close/i });
      await expect(closeBtn).toBeVisible();

      // Pressing Escape closes the dialog
      await page.keyboard.press("Escape");
      await expect(dialog).not.toBeVisible();
    }
  });

  test("all project images have alt text", async ({ page }) => {
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).toBeTruthy();
    }
  });
});
