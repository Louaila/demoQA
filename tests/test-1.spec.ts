import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.getByText('Dynamic Properties').click();
  await page.getByRole('button', { name: 'Color Change' }).click();
});