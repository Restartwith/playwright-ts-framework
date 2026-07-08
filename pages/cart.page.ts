import { Locator, Page, expect } from '@playwright/test';

export class CartPage {
  readonly checkoutButton: Locator;
  readonly cartTitle: Locator;

  constructor(private page: Page) {
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.cartTitle = page.locator('.cart_list');
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async verifyUserOnCartPage() {
    await expect(this.page).toHaveURL(/cart.html/);
    await expect(this.cartTitle).toBeVisible();
  }
}
