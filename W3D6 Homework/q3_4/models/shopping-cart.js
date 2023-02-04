module.exports = class ShoppingCart {
  constructor() {
    this._cartItems = [];
  }
  addCartItem(productId, quantity) {
    this._cartItems.push({ id: productId, quantity: quantity });
  }

  getAllCartItems() {
    return this._cartItems;
  }
};
