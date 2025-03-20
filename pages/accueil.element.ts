import { Page ,expect} from '@playwright/test';



export class Element {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    
    async cliquerelement() {
        await this.page.locator('.card-up').first().click();
    }

    async cliquerlink() {
        await this.page.getByRole('listitem').filter({ hasText: /^Links$/ }).click();
      
        await expect(this.page.getByText('Following links will open new')).toBeVisible();

    }
}





