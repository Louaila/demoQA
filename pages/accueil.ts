import { Page } from '@playwright/test';



export class Accueil {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    
    async navigateto() {
        await this.page.goto('https://demoqa.com/');
    }
}

