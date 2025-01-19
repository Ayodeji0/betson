export class InventoryPage {
  constructor(private page: any) {}

  async getTitle() {
    return this.page.locator('.title');
  }

  async addItemToCart(itemIndex: number) {
    await this.page.click(`.inventory_item:nth-child(${itemIndex}) .btn_inventory`);
  }

  async getCartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }
}