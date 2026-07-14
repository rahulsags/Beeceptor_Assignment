const { test } = require('@playwright/test');

test('Login to Beeceptor', async ({ page }) => {
  await page.goto('https://beeceptor.com');
  await page.pause();
});