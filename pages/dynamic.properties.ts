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
        
        // recup color 1 bouton
        const firstColor = this.page.getByRole('button', { name: 'Color Change' });
        await expect(firstColor).toHaveCSS('color', 'rgb(255, 255, 255)');

       
        await this.page.waitForTimeout(1000)

          //verifie si la couleur a bien changé
        const colorChangeButton = this.page.getByRole('button', { name: 'Color Change' });
        expect(firstColor).not.toBe(colorChangeButton);
        await expect(colorChangeButton).toHaveCSS('color', 'rgb(220, 53, 69)');
      
     }

}


