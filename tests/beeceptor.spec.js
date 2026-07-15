import { test, expect } from '@playwright/test';

test('Beeceptor HTTP Callout Rule', async ({ page, request }) => {

  await page.goto('https://app.beeceptor.com/console/demo-rahul');

  await page.waitForLoadState('networkidle');

  await expect(page.locator('body')).toContainText('demo-rahul');

  const response = await request.get(
    'https://demo-rahul.free.beeceptor.com/'
  );

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(Array.isArray(data)).toBe(true);

  expect(data[0]).toHaveProperty('userId');
  expect(data[0]).toHaveProperty('id');
  expect(data[0]).toHaveProperty('title');
  expect(data[0]).toHaveProperty('body');

  console.log("HTTP Callout Successful");
  console.log(`Received ${data.length} posts`);

});