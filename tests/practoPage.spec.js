// tests/practoPage.spec.js

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { VideoConsult } from '../pages/videoConsult';

test('test', async ({ page }) => {

  // login
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login('+918919587267', 'PeddiRenu@11');

  // Video Consult
    const videoConsult = new VideoConsult(page);
    await videoConsult.gotoVideoConsult();
    await videoConsult.bookConsultation('fever and cough');

    // Add assertions as needed
    expect(await page.locator('text=Consultation booked successfully')).toBeVisible();
});