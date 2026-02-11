import { test, expect } from "@playwright/test";

test.describe("Skin Care & Wellness page", () => {
  test("renders all sections", async ({ page }) => {
    await page.goto("/services/skin-care-wellness");

    await expect(page.locator('[data-testid="skin-care-hero"]')).toBeVisible();
    await expect(page.locator("h1")).toContainText("Skin Care & Wellness");

    await expect(page.locator('[data-testid="skin-care-about"]')).toBeVisible();
    const facialCards = page.locator('[data-testid="facial-treatment-card"]');
    await expect(facialCards).toHaveCount(9);

    await expect(
      page.locator('[data-testid="skin-care-wellness"]')
    ).toBeVisible();
    const wellnessCards = page.locator('[data-testid="wellness-card"]');
    await expect(wellnessCards).toHaveCount(2);

    await expect(page.locator('[data-testid="skin-care-faq"]')).toBeVisible();

    await expect(page.locator('[data-testid="skin-care-cta"]')).toBeVisible();

    await expect(
      page.locator('[data-testid="skin-care-care-promise"]')
    ).toBeVisible();
  });

  test("FAQ accordion expands", async ({ page }) => {
    await page.goto("/services/skin-care-wellness");
    const faqSection = page.locator('[data-testid="skin-care-faq"]');
    const firstButton = faqSection.locator("button").first();
    await firstButton.click();
    await expect(faqSection.locator('[role="region"]').first()).toBeVisible();
  });
});
