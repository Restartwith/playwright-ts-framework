export class TestData {
  readonly baseUrl = process.env.BASE_URL || 'https://www.saucedemo.com/';
  readonly standardUser = process.env.STANDARD_USER || 'standard_user';
  readonly standardPassword = process.env.STANDARD_PASSWORD || 'secret_sauce';

  readonly productName = 'Sauce Labs Onesie';
  readonly checkoutFirstName = 'Test';
  readonly checkoutLastName = 'User';
  readonly checkoutPostalCode = '12345';
}
