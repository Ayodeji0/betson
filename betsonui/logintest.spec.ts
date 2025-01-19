import { test, expect } from '@playwright/test';
import { LoginPage, InventoryPage } from './pages';


test.describe('Login Functionality', () => {

    test('Valid Login', async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
  
      await loginPage.navigate();
      await loginPage.login('standard_user', 'secret_sauce');
      await expect(page).toHaveURL(/inventory.html/);
      await expect(await inventoryPage.getTitle()).toHaveText('Products');
    });
  
    test('Invalid Login', async ({ page }) => {
      const loginPage = new LoginPage(page);
  
      await loginPage.navigate();
      await loginPage.login('invalid_user', 'invalid_password');
      const errorMessage = await loginPage.getErrorMessage();
      await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
  
    test('Locked Out User', async ({ page }) => {
      const loginPage = new LoginPage(page);
  
      await loginPage.navigate();
      await loginPage.login('locked_out_user', 'secret_sauce');
      const errorMessage = await loginPage.getErrorMessage();
      await expect(errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
  
  });