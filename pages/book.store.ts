import { Page , expect,Locator} from '@playwright/test';
import {USER_DATA} from '../constants/user.constants';


export class Book {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly userNameField: Locator;
    readonly passwordField: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameField = page.getByRole('textbox', { name: 'Last Name' });
        this.userNameField = page.getByRole('textbox', { name: 'UserName' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    async createUser(userData = USER_DATA) {

        await this.page.locator('div:nth-child(6) > div > .card-up').click();
        await this.page.getByText('Profile').click();
        await this.page.getByRole('link', { name: 'register' }).click();


        // Remplissage des champs du formulaire
        await this.firstNameField.fill(userData.firstName);
        await expect(this.firstNameField).toHaveValue(userData.firstName);
        
        await this.lastNameField.fill(userData.lastName);
        await expect(this.lastNameField).toHaveValue(userData.lastName);

        await this.userNameField.fill(userData.userName);
        await expect(this.userNameField).toHaveValue(userData.userName)

        await this.passwordField.fill(userData.password);
        await expect(this.passwordField).toHaveValue(userData.password);


        // cliquer sur captcha
        const frame = this.page.frameLocator("iframe[title='reCAPTCHA']");
        const label = frame.locator("#recaptcha-anchor");
        await this.page.waitForTimeout(1000);
        await expect(label).toBeVisible();
        await label.click();

        await this.registerButton.click();
    }
}













