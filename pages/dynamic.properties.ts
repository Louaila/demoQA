import { Page,expect } from '@playwright/test';



export class Dynamic {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async changeColor() {
       
        await this.page.getByRole('heading', { name: 'Elements' }).click();
        await this.page.getByText('Dynamic Properties').click();
        await expect(this.page.getByText('This text has random Id')).toBeVisible();


        await this.page.getByRole('button', { name: 'Color Change' }).click();

        await this.page.waitForTimeout(1000)

        await expect(this.page.getByRole('button', { name: 'Visible After 5 Seconds' })).toBeVisible();
      
     }

}


