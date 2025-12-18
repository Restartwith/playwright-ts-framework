import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';

test('Login and add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // Login
  await loginPage.goToLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifyLoginSuccess();

  // Inventory actions
  await inventoryPage.verifyUserOnInventoryPage();
  await inventoryPage.addOnesieToCart();
  await inventoryPage.openCart();

  // Assertion - user is on cart page
  await expect(page).toHaveURL(/cart.html/);
});
