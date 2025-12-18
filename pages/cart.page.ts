import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  // Checkout button
  checkoutButton = 'xpath=//*[@id="checkout"]';

  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async verifyUserOnCartPage() {
    await expect(this.page).toHaveURL(/cart.html/);
  }
}
