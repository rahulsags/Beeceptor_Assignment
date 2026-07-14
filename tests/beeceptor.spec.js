import { test, expect } from '@playwright/test';

test('Beeceptor HTTP Callout Test', async ({ page, request }) => {

  await page.goto('https://app.beeceptor.com/console/demo-rahul');

  await page.waitForLoadState('networkidle');

  await expect(page.locator('h1')).toContainText('demo-rahul');

  const response = await request.get(
    'https://demo-rahul.free.beeceptor.com/posts'
  );

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(Array.isArray(data)).toBeTruthy();
  expect(data.length).toBeGreaterThan(0);

  console.log(`Received ${data.length} posts`);

});