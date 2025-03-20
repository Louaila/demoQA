import { Page,expect } from '@playwright/test';



export class Widgets {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async hoverTexte(){

        await this.page.locator('div:nth-child(4) > div > .card-up').click();
        await this.page.getByText('Widgets').click();
        await this.page.getByRole('list').getByText('Tool Tips').click();
        await expect(this.page.getByText('Practice Tool Tips')).toBeVisible();
    

        
        await this.page.locator('#toolTipButton').hover();
        await expect(this.page.getByText('You hovered over the Button')).toBeVisible({ timeout: 1000 });


        const hoverTextbox = this.page.getByRole('textbox', { name: 'Hover me to see' });
        await hoverTextbox.hover(); 
        await expect(hoverTextbox).toBeVisible({ timeout: 1000 });

        
        // const contraryLink = this.page.getByRole('link', { name: 'Contrary' });
        // await contraryLink.hover(); // Survoler l'élément
        // await expect(this.page.getByText('You hovered over the Contrary')).toBeVisible({ timeout: 1000 });


        
        
        

    }        

    
    

     async selectmenu(){

        await this.page.getByText('Widgets').click();
        await this.page.getByText('Select Menu').click();


        await this.page.locator('#withOptGroup div').filter({ hasText: 'Select Option' }).nth(1).click();
        await this.page.getByText('Another root option', { exact: true }).click();
        await this.page.locator('.css-tlfecz-indicatorContainer').first().click();
        await this.page.getByText('Other', { exact: true }).click();
        await this.page.locator('#oldSelectMenu').selectOption('10');

        await this.page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
        await this.page.locator('#react-select-4-option-0').click();
        await this.page.locator('#react-select-4-option-1').click();
        await this.page.locator('#react-select-4-option-2').click();
        await this.page.locator('#react-select-4-option-3').click();

        await this.page.locator('#cars').selectOption('audi');
     

     }}  







