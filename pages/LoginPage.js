export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('text=login');
  }

  async gotoLoginPage() {
    // Navigate directly to Practo accounts login to avoid relying on in-page links
    await this.page.goto('https://accounts.practo.com/login');
  }

  async login(username, password) {
    // Try a sequence of possible selectors for username/login field
    const usernameSelectors = [
      'input[name="username"]',
      'input[name*="user"]',
      'input[type="tel"]',
      'input[type="email"]',
      'input[name*="phone"]',
      'input[placeholder*="Phone"]',
      'input[placeholder*="Mobile"]',
      'input'
    ];

    const passwordSelectors = [
      'input[type="password"]',
      'input[name*="password"]'
    ];

    const buttonSelectors = [
      'button[type="submit"]',
      'button:has-text("Login")',
      'button:has-text("Log in")',
      'input[type="submit"]',
      'button'
    ];

    const findAndFill = async (selectors, value) => {
      for (const sel of selectors) {
        const loc = this.page.locator(sel).first();
        if (await loc.count()) {
          try {
            await loc.fill(value);
            return true;
          } catch (e) {
            // continue to next selector
          }
        }
      }
      return false;
    };

    // Fill username (phone/email)
    await findAndFill(usernameSelectors, username);

    // Fill password if present
    await findAndFill(passwordSelectors, password);

    // Click login button (first available)
    for (const sel of buttonSelectors) {
      const btn = this.page.locator(sel).first();
      if (await btn.count()) {
        try {
          await btn.click();
          return;
        } catch (e) {
          // try next
        }
      }
    }
  }
}
