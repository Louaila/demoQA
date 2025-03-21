import { Page, expect } from '@playwright/test';

export class Widgets {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async hoverTexte() {
        // Naviguer vers la section "Tool Tips"
        await this.page.locator('div:nth-child(4) > div > .card-up').click();
        await this.page.getByText('Widgets').click();
        await this.page.getByRole('list').getByText('Tool Tips').click();
        await expect(this.page.getByText('Practice Tool Tips')).toBeVisible();

         
        const toolTipButton = this.page.locator('#toolTipButton');
        await toolTipButton.hover();
        await expect(this.page.getByText('You hovered over the Button')).toBeVisible();

       // Vérifier champ texte 2 eme hover
        const hoverTextbox = this.page.getByRole('textbox', { name: 'Hover me to see' });
        await hoverTextbox.hover();
        await expect(this.page.getByText('You hovered over the Textbox')).toBeVisible({ timeout: 1000 });

        // Vérifier champ texte 3eme hover 
        const contraryLink = this.page.getByRole('link', { name: 'Contrary' });
        await contraryLink.hover();
        await expect(this.page.getByText('You hovered over the Contrary')).toBeVisible({ timeout: 1000 });
    }     
    // hoverTexte fonctione une fois sur 2 


    async selectMenu() {
        // Naviguer vers la section "Select Menu"
        await this.page.getByText('Widgets').click();
        await this.page.getByText('Select Menu').click();

        // Sélectionner les options dans le premier menu deroulant
        await this.page.locator('#withOptGroup div').filter({ hasText: 'Select Option' }).nth(1).click();
        await this.page.getByText('Another root option', { exact: true }).click();
        await expect(this.page.locator('#withOptGroup')).toContainText('Another root option');

        // Sélectionner "Other" dans le deuxième menu déroulant
        await this.page.locator('.css-tlfecz-indicatorContainer').first().click();
        await this.page.getByText('Other', { exact: true }).click();

        

        await this.page.locator('#oldSelectMenu').selectOption('10');
        await expect(this.page.locator('#oldSelectMenu')).toHaveValue('10');

        
        // Sélectionner plusieurs options dans la liste déroulante
        
        await this.page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
        for (let i = 0; i < 4; i++) {
            await this.page.locator(`#react-select-4-option-${i}`).click();
        }

        // Sélectionner "Audi" 
        await this.page.locator('#cars').selectOption('audi');
    }
}







