import { test, expect } from '@playwright/test';

test('Beeceptor HTTP Callout Test', async ({ page, request }) => {

  await page.goto('https://app.beeceptor.com/console/demo-rahul');

  await page.waitForLoadState('networkidle');

  await expect(page.locator('h1')).toContainText('demo-rahul');

  await page.locator('a').filter({ hasText: 'Routing' }).click();

  await page.getByText('Forward Requests').click();

  const targetDomain = page.getByRole('textbox', { name: /Target Domain/i });

  await targetDomain.click();
  await targetDomain.press('Control+A');
  await targetDomain.fill('https://jsonplaceholder.typicode.com');

  await page.getByRole('button', { name: /Save/i }).click();

  await page.waitForLoadState('networkidle');

  const response = await request.get(
    'https://demo-rahul.free.beeceptor.com/posts'
  );

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(Array.isArray(data)).toBe(true);
  expect(data.length).toBeGreaterThan(0);

  console.log(`Received ${data.length} `);
});