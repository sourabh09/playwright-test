import { test, expect, type Page } from '@playwright/test';
import { LoginPage } from './Pages/LoginPage';

test.describe('Regression Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }: { page: Page }) => {
    loginPage = new LoginPage(page);
    await page.goto('https://gnews.io/');
  });

  test('user should navigate to homepage', async ({ page }) => {
    expect(await page.title()).toBe("GNews: News API to Search for the Latest & Historical News")
  });

  test('user should able to login in app', async ({ page }) => {
    await loginPage.login("mike9890@mailinator.com", "Test1234!");
    expect(await page.title()).toBe("Dashboard - GNews API")
  });

  test('verify email address on my account page', async ({ page }) => {
    await loginPage.login("mike9890@mailinator.com", "Test1234!");
    await page.locator('//span[contains(.,("My account"))]').click()
    expect(await page.title()).toBe("My Account - GNews API")
    await expect(page.locator('//input[@id="email"]')).toHaveAttribute("value", "mike9890@mailinator.com")
  });
});