exports.getCartItems = (req, res, next) => {
  let cartItems = [];
  let cartItemsCount = 0;

  if (req.session.cartItems) cartItems = req.session.cartItems;

  for (const item of cartItems) cartItemsCount += item.quantity;

  res.render("shopping-cart", {
    title: "Shopping Cart",
    cartItems: cartItems,
    cartItemsCount: cartItemsCount,
  });
};
