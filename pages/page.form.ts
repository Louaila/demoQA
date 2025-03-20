import { Page,expect } from '@playwright/test';



export class Form {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async remplirForm() {

        await this.page.locator('div:nth-child(2) > div > .avatar').click();

        await this.page.locator('span').filter({ hasText: 'Forms' }).locator('div').first().click();
        await this.page.getByText('Practice Form').click();
       
        
        const heading = this.page.getByRole('heading', { name: 'Practice Form' });
         await expect(heading).toHaveText('Practice Form');

        


         await this.page.getByRole('textbox', { name: 'First Name' }).click();
         await this.page.getByRole('textbox', { name: 'First Name' }).fill('louaila');

         await this.page.getByRole('textbox', { name: 'Last Name' }).click();
         await this.page.getByRole('textbox', { name: 'Last Name' }).fill('touama');

         await this.page.getByRole('textbox', { name: 'name@example.com' }).click();
         await this.page.getByRole('textbox', { name: 'name@example.com' }).fill('lou591@hotmail.fr');

         await this.page.getByText('Female').click();
         await this.page.getByRole('textbox', { name: 'Mobile Number' }).click();
         await this.page.getByRole('textbox', { name: 'Mobile Number' }).fill('0614101245');

         await this.page.locator('#dateOfBirthInput').click();
         await this.page.getByRole('option', { name: 'Choose Thursday, March 20th,' }).click();

         await this.page.locator('.subjects-auto-complete__control').click();
         await this.page.locator('#subjectsInput').fill('lou');

         await this.page.getByText('Sports').click();
         await this.page.getByRole('textbox', { name: 'Current Address' }).click();
         await this.page.getByRole('textbox', { name: 'Current Address' }).fill('46 rue vallon');

         await this.page.getByText('Select State').click();
         await this.page.getByText('NCR', { exact: true }).click();
         await this.page.getByText('Select City').click();
         await this.page.getByText('Delhi', { exact: true }).click();

        //  await this.page.getByRole('button', { name: 'Submit' }).click();
         
       ;

    }

   
}







