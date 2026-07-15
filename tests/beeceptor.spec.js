import { test, expect } from '@playwright/test';

test('Configure HTTP Callout Rule and verify API response', async ({ page, request }) => {

  
  await page.goto('https://app.beeceptor.com/console/demo-rahul');
  await page.waitForLoadState('networkidle');
  
  await page.locator('a').filter({ hasText: 'Mock Rules (3)' }).click();

  await page.getByRole('button', {
  name: 'Edit rule',
  description: 'Edit rule'
  }).click();

  const targetEndpoint = page.getByRole('textbox', {
    name: /https:\/\/your-webhook-endpoint/i
  });

  await targetEndpoint.click();
  await targetEndpoint.press('Control+A');
  await targetEndpoint.fill('https://jsonplaceholder.typicode.com/posts');

  await page.getByRole('button', { name: /Save/i }).click();

  await page.waitForLoadState('networkidle');

  const response = await request.get(
    'https://demo-rahul.free.beeceptor.com/'
  );

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(Array.isArray(data)).toBe(true);
  expect(data.length).toBeGreaterThan(0);

  expect(data[0]).toHaveProperty('userId');
  expect(data[0]).toHaveProperty('id');
  expect(data[0]).toHaveProperty('title');
  expect(data[0]).toHaveProperty('body');

  console.log('HTTP Callout configured successfully');
  console.log(`Received ${data.length} posts`);
});