import { test, expect, type Page } from '@playwright/test';
import { Element } from '../pages/accueil.element'; 
import {Accueil}  from '../pages/accueil'
import { Link } from '../pages/page.link';
import { Form } from '../pages/page.form'
import { Widgets } from '../pages/widgets'
import { Dynamic } from '../pages/dynamic.properties';
import { text } from 'stream/consumers';






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
  const widgets = new Widgets(page);
 
  await accueil.navigateto();
  await widgets.hoverTexte();
  await widgets.selectmenu();

});


test('changer color dynamique', async ({ page }) => {
  

  const accueil = new Accueil(page)
  const dynamic = new Dynamic(page);
 
  await accueil.navigateto();
  await dynamic.changeColor();

});