import { expect, test } from './helpers/fixtures';

test('Smoke test: login works for standard user', async ({ loginPage, inventoryPage, testData }) => {
  await loginPage.goToLoginPage(testData.baseUrl);
  await loginPage.login(testData.standardUser, testData.standardPassword);

  await loginPage.verifyLoginSuccess();
  await inventoryPage.verifyUserOnInventoryPage();
  await expect(inventoryPage.inventoryTitle).toBeVisible();
});
