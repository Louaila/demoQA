import { Page,expect } from '@playwright/test';



export class Widjets {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async hover() {

        await this.page.locator('div:nth-child(4) > div > .card-up').click();
        await this.page.getByText('Widgets').click();
        await this.page.getByRole('list').getByText('Tool Tips').click();

        
        await expect(this.page.getByText('Practice Tool Tips')).toBeVisible();
       

      
        // await this.page.getByRole('button', { name: 'Hover me to see' }).click();
        // await expect(this.page.getByText('You hovered over the Button')).toBeVisible();

        // await this.page.getByRole('textbox', { name: 'Hover me to see' }).click();

        // await this.page.getByRole('textbox', { name: 'Hover me to see' }).click();
        // await expect(this.page.getByRole('textbox', { name: 'Hover me to see' })).toBeVisible();
        
        // await this.page.getByRole('link', { name: 'Contrary' }).click(); 
        // await expect(this.page.getByText('You hovered over the Contrary')).toBeVisible();


           // Tester le bouton "Hover me to see"
           const hoverButton = this.page.getByRole('button', { name: 'Hover me to see' });
           await hoverButton.hover(); // Utilisation de hover au lieu de click
           await expect(this.page.getByText('You hovered over the Button')).toBeVisible();
   
           // Tester le champ de texte "Hover me to see"
           const hoverTextbox = this.page.getByRole('textbox', { name: 'Hover me to see' });
           await hoverTextbox.hover(); // Utilisation de hover au lieu de click
           await expect(hoverTextbox).toBeVisible();
   
           // Tester le lien "Contrary"
           const contraryLink = this.page.getByRole('link', { name: 'Contrary' });
           await contraryLink.hover(); // Utilisation de hover au lieu de click
           await expect(this.page.getByText('You hovered over the Contrary')).toBeVisible();
       }
    

}








