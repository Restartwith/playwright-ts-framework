import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://example.com/login');
  await loginPage.login('admin', 'password');
});
