import { Page } from '@playwright/test';

export class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  username = '#username';
  password = '#password';
  loginButton = '#login';

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginButton);
  }
}
