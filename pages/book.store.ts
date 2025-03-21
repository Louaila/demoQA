import { Page , expect} from '@playwright/test';
import {USER_DATA} from '../contants/user.constants';


export class Book {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    
    async createUser() {
        await this.page.locator('div:nth-child(6) > div > .card-up').click();
        await this.page.getByText('Profile').click();
        await this.page.getByRole('link', { name: 'register' }).click();

        const firstNameField = this.page.getByRole('textbox', { name: 'First Name' });
        const lastNameField = this.page.getByRole('textbox', { name: 'Last Name' });
        const userNameField = this.page.getByRole('textbox', { name: 'UserName' });
        const passwordField = this.page.getByRole('textbox', { name: 'Password' });

        
        await firstNameField.fill(USER_DATA.firstName);
        await lastNameField.fill(USER_DATA.lastName);
        await userNameField.fill(USER_DATA.userName);
        await passwordField.fill(USER_DATA.password);


       
        const frame = this.page.frameLocator("iframe[title='reCAPTCHA']");
        const label = frame.locator("#recaptcha-anchor");
        await this.page.waitForTimeout(1000);
        await expect(label).toBeVisible();
        await label.click();
        

        
       

        await this.page.getByRole('button', { name: 'Register' }).click();

    
    }
}








   