import { test, expect } from '@playwright/test';

test('Navigate to EPAM Services and verify Client Work', async ({ page }) => {
  // Step 1: Navigate to the EPAM website
  await page.goto('https://www.epam.com/');

  // Step 2: Click "Services" from the header menu
  const servicesSelector = 'header [data-gtm-category="header"] [href="/services"]';
  await page.click(servicesSelector);

  // Step 3: Click "Explore Our Client Work" link
  const clientWorkLinkSelector = 'a[aria-label*="Explore Our Client Work"]';
  await page.click(clientWorkLinkSelector);

  // Step 4: Verify "Client Work" text is visible on the page
  const clientWorkTextSelector = 'text=Client Work';
  const isTextVisible = await page.isVisible(clientWorkTextSelector);
  await expect(isTextVisible).toBeTruthy();
});