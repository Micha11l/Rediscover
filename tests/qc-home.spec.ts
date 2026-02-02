import { test, expect } from '@playwright/test';

/**
 * QC Helper: Assert dimension is within tolerance
 * @param actual - measured value
 * @param expected - design spec value
 * @param tolerance - acceptable variance (default ±2px)
 */
function expectNear(actual: number, expected: number, tolerance = 2) {
  expect(actual).toBeGreaterThanOrEqual(expected - tolerance);
  expect(actual).toBeLessThanOrEqual(expected + tolerance);
}

test('Homepage layout QC', async ({ page }) => {
  await page.goto('/');

  // Hero frame (inner container) dimensions
  const heroFrame = page.locator('[data-node="hero-frame"]');
  await expect(heroFrame).toBeVisible();
  const heroFrameBox = await heroFrame.boundingBox();
  expect(heroFrameBox).not.toBeNull();
  if (heroFrameBox) {
    expectNear(heroFrameBox.width, 1440);
  }

  const navbar = heroFrame.locator('nav').first();
  await expect(navbar).toBeVisible();
  const navbarBox = await navbar.boundingBox();
  expect(navbarBox).not.toBeNull();
  if (navbarBox) {
    expectNear(navbarBox.height, 56);
  }

  // CTA button dimensions
  const ctaButton = heroFrame.locator('button:has-text("Explore Services")');
  await expect(ctaButton).toBeVisible();
  const ctaBox = await ctaButton.boundingBox();
  expect(ctaBox).not.toBeNull();
  if (ctaBox) {
    expectNear(ctaBox.width, 195);
    expectNear(ctaBox.height, 56);
  }

  // About section
  const about = page.locator('[data-section="about"]');
  await expect(about).toBeVisible();
  const aboutBox = await about.boundingBox();
  expect(aboutBox).not.toBeNull();
  if (aboutBox) {
    expectNear(aboutBox.height, 698);
  }

  // About card dimensions
  const card = page.locator('[data-node="about-card"]');
  await expect(card).toBeVisible();
  const cardBox = await card.boundingBox();
  expect(cardBox).not.toBeNull();
  if (cardBox) {
    expectNear(cardBox.width, 1376);
    expectNear(cardBox.height, 602);
  }

  // Hero-About overlap (card overlaps hero by ~64px)
  expect(heroFrameBox).not.toBeNull();
  expect(cardBox).not.toBeNull();
  if (heroFrameBox && cardBox) {
    const heroBottom = heroFrameBox.y + heroFrameBox.height;
    const cardTop = cardBox.y;
    const overlap = heroBottom - cardTop;
    expectNear(overlap, 64);
  }

  // Services section
  const services = page.locator('[data-section="services"]');
  await expect(services).toBeVisible();

  // First service card dimensions
  const firstCard = page.locator('[data-node="service-card-1"]');
  await expect(firstCard).toBeVisible();
  const firstCardBox = await firstCard.boundingBox();
  expect(firstCardBox).not.toBeNull();
  if (firstCardBox) {
    expectNear(firstCardBox.width, 250);
    expectNear(firstCardBox.height, 443);
  }

  // Services grid gap (80px horizontal between cards)
  const servicesGrid = page.locator('[data-node="services-grid"]');
  const gridCards = servicesGrid.locator('> div');
  const firstGridCard = gridCards.nth(0);
  const secondGridCard = gridCards.nth(1);

  const firstGridCardBox = await firstGridCard.boundingBox();
  const secondGridCardBox = await secondGridCard.boundingBox();

  expect(firstGridCardBox).not.toBeNull();
  expect(secondGridCardBox).not.toBeNull();

  if (firstGridCardBox && secondGridCardBox) {
    const horizontalGap = secondGridCardBox.x - (firstGridCardBox.x + firstGridCardBox.width);
    expectNear(horizontalGap, 80);
  }
});
