import { Page,expect } from '@playwright/test';
import { FORM_DATA } from '../contants/form.constants';


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

    
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(FORM_DATA.firstName);
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(FORM_DATA.lastName);
        await this.page.getByRole('textbox', { name: 'name@example.com' }).fill(FORM_DATA.email);

        await this.page.getByText(FORM_DATA.gender).click();
        await this.page.getByRole('textbox', { name: 'Mobile Number' }).fill(FORM_DATA.mobileNumber);

        await this.page.locator('#dateOfBirthInput').click();
        await this.page.getByRole('option', { name: `Choose ${FORM_DATA.dateOfBirth}` }).click();

        await this.page.locator('.subjects-auto-complete__control').click();
        await this.page.locator('#subjectsInput').fill(FORM_DATA.subject);

        for (const hobby of FORM_DATA.hobbies) {
            await this.page.getByText(hobby).click();
        }

        await this.page.getByRole('textbox', { name: 'Current Address' }).fill(FORM_DATA.currentAddress);

        await this.page.getByText('Select State').click();
        await this.page.getByText(FORM_DATA.state, { exact: true }).click();
        await this.page.getByText('Select City').click();
        await this.page.getByText(FORM_DATA.city, { exact: true }).click();

      
       ;

    }

   
}







