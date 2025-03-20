import { Page } from '@playwright/test';



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

        await firstNameField.fill('louaila');
        await lastNameField.fill('touama');
        await userNameField.fill('touama');
        await passwordField.fill('12345678');

        await this.page.getByRole('button', { name: 'Register' }).click();
    }
}
