const express = require("express");
const shoppingCartController = require("../controllers/shopping-cart-controller");

const router = express.Router();

router.get("/", shoppingCartController.getCartItems);

module.exports = router;
