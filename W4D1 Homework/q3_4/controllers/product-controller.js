const Store = require("../models/store");

exports.getProducts = (req, res, next) => {
  // Storing some test data to add new products
  Store.addNewProduct(
    "Apple",
    3.9,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic.",
    "/images/apple.jpeg",
    "/images/apple-banner.jpeg"
  );
  Store.addNewProduct(
    "Orange",
    4.1,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic.",
    "/images/orange.jpeg"
  );
  Store.addNewProduct(
    "Grapes",
    5.6,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic.",
    "/images/grapes.jpeg"
  );
  Store.addNewProduct(
    "Kiwi",
    2.7,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic.",
    "/images/kiwi.jpeg"
  );
  Store.addNewProduct(
    "Peach",
    3.4,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic.",
    "/images/peach.jpeg"
  );
  Store.addNewProduct(
    "Mango",
    7.1,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic.",
    "/images/mango.jpeg"
  );
  Store.addNewProduct(
    "Pineapple",
    6.3,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic.",
    "/images/pineapple.jpeg"
  );
  Store.addNewProduct(
    "Watermelon",
    4.2,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic.",
    "/images/watermelon.jpeg"
  );

  res.render("product", {
    title: "Product: " + Store.getProductById(0).getName(),
    product: Store.getProductById(0),
  });
};
