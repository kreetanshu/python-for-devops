import { test, expect } from '@playwright/test';

test('Navigate to Client Work section', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');

  // Step 2: Select "Services" from the header menu
  await page.hover('text=Services');

  // Step 3: Click "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Step 4: Verify that the "Client Work" text is visible on the page
  const clientWorkVisible = await page.isVisible('text=Client Work');
  expect(clientWorkVisible).toBeTruthy();
});