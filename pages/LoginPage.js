export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('text=login');
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async gotoLoginPage() {
    await this.page.goto('https://www.practo.com/');
  }

  async login(username, password) {
    await this.loginLink.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
