const express = require("express");
const shoppingCartController = require("../controllers/shopping-cart-controller");

const router = express.Router();

router.get("/", shoppingCartController.getCartItems);
router.post("/", shoppingCartController.addCartItem);

module.exports = router;
