const inventory = require("../models/inventory");

exports.getProduct = (req, res, next) => {
  const productId = req.query.productId;
  const product = inventory.find((p) => p.id === parseInt(productId));

  if (product !== undefined) {
    res.render("product", {
      title: "Product: " + product.name,
      product: product,
    });
  } else next();
};
