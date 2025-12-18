import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // XPath locators
  usernameInput = 'xpath=//*[@id="user-name"]';
  passwordInput = 'xpath=//*[@id="password"]';
  loginButton = 'xpath=//*[@id="login-button"]';

  async goToLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory.html/);
  }
}
