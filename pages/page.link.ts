import { Page,expect } from '@playwright/test';



export class Link {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goSexionLink() {
        await this.page.locator('.card-up').first().click();

        //  ALLER SUR link
        await this.page.getByRole('listitem').filter({ hasText: /^Links$/ }).click();
        await expect(this.page.getByText('Following links will open new')).toBeVisible();
    }



    async hover() {
        await this.page.getByRole('link', { name: 'Created' }).click();
        await expect(this.page.getByText('Created')).toBeVisible();

        await this.page.waitForTimeout(3000)


        await this.page.getByRole('link', { name: 'No Content' }).click();
        await expect(this.page.getByText('No Content')).toBeVisible();


        await this.page.waitForTimeout(3000)
        await this.page.getByRole('link', { name: 'Moved' }).click();
        await expect(this.page.getByText('Moved Permanently')).toBeVisible();
        
    }

   
}

