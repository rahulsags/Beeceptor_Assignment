import { test, expect } from '@playwright/test';

test('Configure HTTP Callout using Forward Requests', async ({ page }) => {

  // Open your Beeceptor endpoint
  await page.goto('https://app.beeceptor.com/console/demo-rahul');
  await page.waitForLoadState('networkidle');   

  // Open Routing
    await page.getByText('Routing').click();

  // Select Forward Requests
  await page.getByText('Forward Requests').click();

  // Configure target domain
  await page
    .getByRole('textbox', { name: /Target Domain/i })
    .fill('https://jsonplaceholder.typicode.com');

  // Save configuration
  await page.getByRole('button', { name: /Save/i }).click();

});