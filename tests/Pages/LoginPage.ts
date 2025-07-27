import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    private loginlink: Locator;
    private pincodeField: Locator;
    private pincodeListItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('id=email');
        this.passwordField = page.locator('id=password');
        this.loginButton = page.locator('id=submitButton');
        this.loginlink = page.locator('//div[@class="ml-auto"]//a[@href="/login"]');
        this.pincodeField = page.locator("id=search")
        this.pincodeListItem = page.locator("//p[text()[contains(.,'380058')]]")
    }

    async login(username: string, password: string) {
        await this.loginlink.click();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async submitPinCode(pincode: string) {
        await this.pincodeField.fill(pincode);
        await this.pincodeListItem.click();
    }
}