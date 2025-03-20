import { test, expect, type Page } from '@playwright/test';
import { Element } from '../pages/accueil.element'; 
import {Accueil}  from '../pages/accueil'
import { Link } from '../pages/page.link';
import { Form } from '../pages/page.form'
import{Widjets} from '../pages/widgets'






test('cliquer sur element', async ({ page }) => {
  const accueil = new Accueil(page)
  const element = new Element(page)
  const link  = new Link(page)

  await accueil.navigateto();
  await element.cliquerelement();
  await element.cliquerlink();
  await link.cliquerelink();

});




test('remplir le form', async ({ page }) => {
  
  const accueil = new Accueil(page)
  const form = new Form(page)
 
  await accueil.navigateto();
  await form.remplirForm();

});


test('verifier les hover', async ({ page }) => {
  

  const accueil = new Accueil(page)
  const widjets = new Widjets(page)
 
  await accueil.navigateto();
  await widjets.hover();

});
