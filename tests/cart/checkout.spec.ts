import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import { CartPage } from '../../pages/cart.page';

test('User adds product and proceeds to checkout', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  // Login
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');

  // Inventory
  await inventoryPage.verifyUserOnInventoryPage();
  await inventoryPage.addOnesieToCart();
  await inventoryPage.openCart();

  // Cart
  await cartPage.verifyUserOnCartPage();
  await cartPage.clickCheckout();
});
