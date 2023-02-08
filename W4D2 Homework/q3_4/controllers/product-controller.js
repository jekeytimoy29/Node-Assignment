const inventory = require("../models/inventory");

exports.getProduct = (req, res, next) => {
  const productId = req.query.productId;
  const product = inventory.find((p) => p.id === parseInt(productId));
  let cartItems = [];
  let cartItemsCount = 0;

  if (req.session.cartItems) cartItems = req.session.cartItems;

  for (const item of cartItems) cartItemsCount += item.quantity;

  if (product !== undefined) {
    res.render("product", {
      title: "Product: " + product.name,
      product: product,
      cartItemsCount: cartItemsCount,
    });
  } else next();
};

exports.addToCart = (req, res, next) => {
  console.log(req.body);
  const productId = req.body.productId;
  console.log(productId);
  const product = inventory.find((p) => p.id === parseInt(productId));
  let cartItemsCount = 0;

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

    for (const item of cartItems) cartItemsCount += item.quantity;

    res.json(cartItemsCount);
  } else next();
};
