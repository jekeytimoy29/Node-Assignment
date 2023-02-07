const inventory = require("../models/inventory");

exports.getCartItems = (req, res, next) => {
  let cartItems = [];

  if (req.session.cartItems) cartItems = req.session.cartItems;

  res.render("shopping-cart", {
    title: "Shopping Cart",
    cartItems: cartItems,
  });
};

exports.addCartItem = (req, res, next) => {
  const productId = req.body.productId;
  const product = inventory.find((p) => p.id === parseInt(productId));

  if (product !== undefined) {
    let cartItems = [];

    if (req.session.cartItems) cartItems = req.session.cartItems;

    let existingCartItem = cartItems.find((i) => i.id === parseInt(productId));

    if (existingCartItem === undefined) {
      cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        totalPrice: product.price,
        quantity: 1,
        img: product.img,
      });
    } else {
      existingCartItem.quantity++;
      existingCartItem.totalPrice =
        existingCartItem.price * existingCartItem.quantity;
    }

    req.session.cartItems = cartItems;
    res.redirect("/shoppingcart");
  } else next();
};
