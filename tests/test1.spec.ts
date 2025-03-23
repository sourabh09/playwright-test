import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://gnews.io/');
});


test.describe('Navigation to page', () => {
     test.skip('user should navigate to homepage', async ({ page }) => {
      expect(await page.title()).toBe("GNews: News API to Search for the Latest & Historical News")
    });

    test.skip('user should able to login in app', async ({ page }) => {
      await page.locator('//div[@class="ml-auto"]//a[@href="/login"]').click()
      //expect(await page.title()).toBe("Sign in - GNews API")
      await page.locator('id=email').fill("mike9890@mailinator.com")
      await page.locator('id=password').fill("Test1234!")
      await page.locator('id=submitButton').click()
      expect(await page.title()).toBe("Dashboard - GNews API")
    });

    test('verify email address on my account page', async ({ page }) => {
      await page.locator('//div[@class="ml-auto"]//a[@href="/login"]').click()
      await page.locator('id=email').fill("mike9890@mailinator.com")
      await page.locator('id=password').fill("Test1234!")
      await page.locator('id=submitButton').click()
      await page.locator('//span[contains(.,("My account"))]').click()
      //expect(await page.title()).toBe("My account - GNews API")
      await expect(page.locator('//input[@id="email"]')).toHaveAttribute("value","mike9890@mailinator.com")
  });
});