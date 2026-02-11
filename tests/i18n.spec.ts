import { test, expect } from "@playwright/test";

test.describe("Language Toggle", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test("default language is English", async ({ page }) => {
    await page.goto("/");
    const heroTitle = page.locator('[data-node="hero-frame"] h1');
    await expect(heroTitle).toContainText("Rediscover");
  });

  test("clicking Chinese toggle switches text to Chinese", async ({ page }) => {
    await page.goto("/");

    await page.click('button[aria-label="Switch to Chinese"]');

    const heroSubtitle = page.locator('[data-node="hero-frame"] p').first();
    const subtitleText = await heroSubtitle.textContent();
    expect(subtitleText).toMatch(/[\u4e00-\u9fff]/);
  });

  test("language preference persists after reload", async ({ page }) => {
    await page.goto("/");

    await page.click('button[aria-label="Switch to Chinese"]');
    await page.waitForTimeout(100);

    await page.reload();
    await page.waitForTimeout(500);

    const heroSubtitle = page.locator('[data-node="hero-frame"] p').first();
    const subtitleText = await heroSubtitle.textContent();
    expect(subtitleText).toMatch(/[\u4e00-\u9fff]/);
  });

  test("can switch back to English", async ({ page }) => {
    await page.goto("/");

    await page.click('button[aria-label="Switch to Chinese"]');
    await page.click('button[aria-label="Switch to English"]');

    const heroTitle = page.locator('[data-node="hero-frame"] h1');
    await expect(heroTitle).toContainText("Rediscover");
  });

  test("toggle visual state indicates active language", async ({ page }) => {
    await page.goto("/");

    const englishBtn = page.locator('button[aria-label="Switch to English"]').first();
    const chineseBtn = page.locator('button[aria-label="Switch to Chinese"]').first();

    await expect(chineseBtn).toHaveClass(/opacity-50/);

    await chineseBtn.click();
    await expect(englishBtn).toHaveClass(/opacity-50/);
  });

  test("navbar links translate", async ({ page }) => {
    await page.goto("/");
    await page.click('button[aria-label="Switch to Chinese"]');

    const homeLink = page.locator('nav a[href="/"]').last();
    const homeLinkText = await homeLink.textContent();
    expect(homeLinkText).toMatch(/[\u4e00-\u9fff]/);
  });

  test("about section translates", async ({ page }) => {
    await page.goto("/");
    await page.click('button[aria-label="Switch to Chinese"]');

    const aboutSection = page.locator('[data-section="about"]');
    const text = await aboutSection.textContent();
    expect(text).toMatch(/[\u4e00-\u9fff]/);
  });

  test("footer translates", async ({ page }) => {
    await page.goto("/");
    await page.click('button[aria-label="Switch to Chinese"]');

    const footer = page.locator("footer");
    const text = await footer.textContent();
    expect(text).toMatch(/[\u4e00-\u9fff]/);
  });
});

test.describe("Browser Language Detection", () => {
  test("Chinese browser locale defaults to Chinese", async ({ browser }) => {
    const context = await browser.newContext({
      locale: "zh-CN",
    });
    const page = await context.newPage();

    await page.goto("/");
    await page.evaluate(() => localStorage.removeItem("language"));
    await page.reload();
    await page.waitForTimeout(500);

    const heroSubtitle = page.locator('[data-node="hero-frame"] p').first();
    const subtitleText = await heroSubtitle.textContent();
    expect(subtitleText).toMatch(/[\u4e00-\u9fff]/);

    await context.close();
  });
});
