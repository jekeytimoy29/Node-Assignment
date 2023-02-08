const express = require("express");
const productController = require("../controllers/product-controller");

const router = express.Router();

router.get("/", productController.getProduct);
router.post("/addToCart", productController.addToCart);

module.exports = router;
