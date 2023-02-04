module.exports = class ShoppingCart {
  constructor() {
    this._cartItems = [];
  }
  addCartItem(product, quantity) {
    this._cartItems.push({
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
      img: product.getImg(),
      quantity: quantity,
    });
  }

  getAllCartItems() {
    return this._cartItems;
  }
};
