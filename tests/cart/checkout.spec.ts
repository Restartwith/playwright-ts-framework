import { expect, test } from '../../fixtures/baseFixture';

test('User can add a product and proceed to checkout', async ({ page, loginPage, inventoryPage, cartPage, testData }) => {
  await loginPage.goToLoginPage(testData.baseUrl);
  await loginPage.login(testData.standardUser, testData.standardPassword);

  await inventoryPage.verifyUserOnInventoryPage();
  await inventoryPage.addOnesieToCart();
  await inventoryPage.openCart();

  await cartPage.verifyUserOnCartPage();
  await cartPage.clickCheckout();

  await expect(page).toHaveURL(/checkout-step-one.html/);
});
