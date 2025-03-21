import { Page, expect } from '@playwright/test';

export class Form {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async remplirForm(data: {
        firstName: string;
        lastName: string;
        email: string;
        gender: string;
        mobileNumber: string;
        dateOfBirth: string;
        hobbies: string[];
        currentAddress: string;
        state: string;
        city: string;
    }) {
       
        await this.page.locator('div:nth-child(2) > div > .avatar').click();
        await this.page.locator('span').filter({ hasText: 'Forms' }).locator('div').first().click();
        await this.page.getByText('Practice Form').click();

        const heading = this.page.getByRole('heading', { name: 'Practice Form' });
        await expect(heading).toHaveText('Practice Form');

    
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(data.firstName);
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastName);
        await this.page.getByRole('textbox', { name: 'name@example.com' }).fill(data.email);

        
        await this.page.getByText(data.gender).click();

        await this.page.getByRole('textbox', { name: 'Mobile Number' }).fill(data.mobileNumber);

        
        await this.page.locator('#dateOfBirthInput').click();
        await this.page.getByRole('option', { name: `Choose ${data.dateOfBirth}` }).click();

        
        for (const hobby of data.hobbies) {
            await this.page.getByText(hobby).click();
        }

        
        await this.page.getByRole('textbox', { name: 'Current Address' }).fill(data.currentAddress);

        await this.page.getByText('Select State').click();
        await this.page.getByText(data.state, { exact: true }).click();
        await this.page.getByText('Select City').click();
        await this.page.getByText(data.city, { exact: true }).click();

        
        // await this.page.getByRole('button', { name: 'Submit' }).click();
    }
}







