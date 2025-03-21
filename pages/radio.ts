import { Page,expect } from '@playwright/test';



export class Radio {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async clickRadioButton() {
       
        await this.page.locator('div').filter({ hasText: /^Elements$/ }).first().click();
        await this.page.getByText('Radio Button').click();


        // Sélection de "Yes"
        await this.page.getByText('Yes').click();
        await expect(this.page.getByRole('paragraph').getByText('Yes')).toBeVisible();

        // Sélection de "Impressive"
        await this.page.getByText('Impressive').click();
        await expect(this.page.getByRole('paragraph').getByText('Impressive')).toBeVisible();
        
    }

   
}