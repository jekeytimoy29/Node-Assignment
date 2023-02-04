const Store = require("../models/store");
const ShoppingCart = require("../models/shopping-cart");

exports.getCartItems = (req, res, next) => {
  // Storing some test data to add new product
  Store.addNewProduct(
    "Orange",
    4.1,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic."
  );
  Store.addNewProduct(
    "Grapes",
    5.6,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic."
  );
  Store.addNewProduct(
    "Kiwi",
    2.7,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic."
  );
  Store.addNewProduct(
    "Peach",
    3.4,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic."
  );
  Store.addNewProduct(
    "Mango",
    7.1,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic."
  );
  Store.addNewProduct(
    "Pineapple",
    6.3,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic."
  );
  Store.addNewProduct(
    "Watermelon",
    4.2,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum in esse. Distinctio iure culpa qui vitae in magnam perferendis tenetur earum excepturi ullam dicta, quo dolorum aut harum hic."
  );

  //Storing test data products as Shopping cart items
  const shoppingCart = new ShoppingCart();

  shoppingCart.addCartItem(0, 3);
  shoppingCart.addCartItem(1, 2);
  shoppingCart.addCartItem(2, 7);
  shoppingCart.addCartItem(3, 4);
  shoppingCart.addCartItem(4, 1);
  shoppingCart.addCartItem(5, 5);
  shoppingCart.addCartItem(6, 1);

  res.render("shopping-cart", {
    title: "Shopping Cart",
    shoppingCartItems: shoppingCart.getAllCartItems(),
  });
};
