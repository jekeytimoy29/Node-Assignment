const Store = require("../models/store");

exports.getProducts = (req, res, next) => {
  Store.addNewProduct(
    "Apple",
    3.9,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic."
  );

  res.render("product", {
    title: Store.getProductById(0).getName(),
    product: Store.getProductById(0),
  });
};
