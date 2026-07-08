import { Locator, Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly addOnesieBtn: Locator;
  readonly cartIcon: Locator;
  readonly inventoryTitle: Locator;

  constructor(private page: Page) {
    this.addOnesieBtn = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    this.inventoryTitle = page.locator('.inventory_list');
  }

  async addOnesieToCart() {
    await this.addOnesieBtn.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async verifyUserOnInventoryPage() {
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.inventoryTitle).toBeVisible();
  }
}
