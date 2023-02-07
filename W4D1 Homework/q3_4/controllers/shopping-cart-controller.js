const Store = require("../models/store");
const ShoppingCart = require("../models/shopping-cart");

exports.getCartItems = (req, res, next) => {
  //Storing test data products as Shopping cart items
  const shoppingCart = new ShoppingCart();

  shoppingCart.addCartItem(Store.getProductById(0), 3);
  shoppingCart.addCartItem(Store.getProductById(1), 2);
  shoppingCart.addCartItem(Store.getProductById(2), 7);
  shoppingCart.addCartItem(Store.getProductById(3), 4);
  shoppingCart.addCartItem(Store.getProductById(4), 1);
  shoppingCart.addCartItem(Store.getProductById(5), 5);
  shoppingCart.addCartItem(Store.getProductById(6), 1);
  shoppingCart.addCartItem(Store.getProductById(7), 6);

  res.render("shopping-cart", {
    title: "Shopping Cart",
    cartItems: shoppingCart.getAllCartItems(),
  });
};
