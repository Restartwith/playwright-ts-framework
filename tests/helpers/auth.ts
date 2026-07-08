import { Page } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';

export async function loginAsStandardUser(page: Page, username: string, password: string) {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login(username, password);
  await inventoryPage.verifyUserOnInventoryPage();
}
