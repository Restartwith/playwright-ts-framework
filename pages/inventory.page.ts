import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  // XPaths
  addOnesieBtn = 'xpath=//*[@id="add-to-cart-sauce-labs-onesie"]';
  cartIcon = 'xpath=//*[@id="shopping_cart_container"]/a';

  async addOnesieToCart() {
    await this.page.click(this.addOnesieBtn);
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }

  async verifyUserOnInventoryPage() {
    await expect(this.page).toHaveURL(/inventory.html/);
  }
}
