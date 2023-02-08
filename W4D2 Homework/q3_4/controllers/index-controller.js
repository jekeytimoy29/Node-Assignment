const inventory = require("../models/inventory");

exports.homePage = (req, res) => {
  let cartItems = [];
  let cartItemsCount = 0;

  if (req.session.cartItems) cartItems = req.session.cartItems;

  for (const item of cartItems) cartItemsCount += item.quantity;

  res.render("index", {
    title: "Home",
    products: inventory,
    cartItemsCount: cartItemsCount,
  });
};
