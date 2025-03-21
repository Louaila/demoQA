import { test, expect, type Page } from '@playwright/test';
import { Accueil }  from '../pages/accueil'
import { Link } from '../pages/page.link';
import { Form } from '../pages/page.form'
import { Widgets } from '../pages/widgets'
import { Dynamic } from '../pages/dynamic.properties';
import { Book } from '../pages/book.store';
import { Radio } from '../pages/radio';






test.describe('Menu Form', () => {
  test('register student', async ({ page }) => {

      const accueil = new Accueil(page);
      const form = new Form(page);
    
      const formData = {
        firstName: 'Louaila',
        lastName: 'Touama',
        email: 'lou591@hotmail.fr',
        gender: 'Female',
        mobileNumber: '0614101245',
        dateOfBirth: 'Thursday, March 20th',
        hobbies: ['Sports', 'Reading', 'Music'],
        currentAddress: '46 rue vallon',
        state: 'NCR',
        city: 'Delhi',
  };
  

    await accueil.navigateto();
    await form.fillOutform(formData);
  
});

});





test.describe('Menu Widgets', () => {
  test('check hovers', async ({ page }) => {
    const accueil = new Accueil(page)
    const widgets = new Widgets(page);
   
    await accueil.navigateto();
    await widgets.hoverTexte();
    
  
  });

  test('Select Menu', async ({ page }) => {
    const accueil = new Accueil(page);
    const widgets = new Widgets(page);
   
    await accueil.navigateto();
    await widgets.selectMenu();
  
  });


});





test.describe('Menu Element', () => {

  test('click on the links', async ({ page }) => {
    const accueil = new Accueil(page)
    const link  = new Link(page)
  
    await accueil.navigateto();
    await link.goSexionLink();
    await link.hover();
  
  });
  

  test('click radio button  ', async ({ page }) => {
    const accueil = new Accueil(page)
    const radio = new Radio(page);
   
    await accueil.navigateto();
    await radio.clickRadioButton();
  
  });


  
  test('change dynamic color', async ({ page }) => {
        const accueil = new Accueil(page);
        const dynamic = new Dynamic(page);
      
        await accueil.navigateto();
        await dynamic.changeColor();

    });
});




test.describe('Menu Book store application', () => {

  test('Register to Book Store ', async ({ page }) => {
    const accueil = new Accueil(page)
    const book = new Book(page);
   
    await accueil.navigateto();
    await book.createUser();
  
  });
 
});






