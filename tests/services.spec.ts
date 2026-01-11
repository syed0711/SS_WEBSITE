import { test, expect } from '@playwright/test';

test.describe('Services Page', () => {
  test('should load the services page', async ({ page }) => {
    await page.goto('/services');

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Check that the page title or heading is visible
    await expect(page).toHaveTitle(/Services/i);
  });

  test('should display services content', async ({ page }) => {
    await page.goto('/services');

    // Add your specific tests here based on your services page content
    // For example:
    // await expect(page.locator('h1')).toBeVisible();
  });
});
