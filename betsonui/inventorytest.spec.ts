
import { test, expect, Locator } from '@playwright/test';
import { LoginPage, InventoryPage } from './pages';
test.describe('Add to Cart Functionality', () => {

    test('Add Single Item to Cart', async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
  
      await loginPage.navigate();
      await loginPage.login('standard_user', 'secret_sauce');
      await inventoryPage.addItemToCart(1);
      const cartBadge = await inventoryPage.getCartBadge();
      await expect(cartBadge).toHaveText('1');
    });
  
    test('Add Multiple Items to Cart', async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
  
      await loginPage.navigate();
      await loginPage.login('standard_user', 'secret_sauce');
      await inventoryPage.addItemToCart(1);
      await inventoryPage.addItemToCart(2);
      const cartBadge = await inventoryPage.getCartBadge();
      await expect(cartBadge).toHaveText('2');
    });
  
    test('Verify Cart Count', async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
  
      await loginPage.navigate();
      await loginPage.login('standard_user', 'secret_sauce');
      await inventoryPage.addItemToCart(1);
      await inventoryPage.addItemToCart(2);
      const cartBadge = await inventoryPage.getCartBadge();
      await expect(cartBadge).toHaveText('2');
    });
  
  });