import { test, expect } from '@playwright/test';

test('Playwright home page loads', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
