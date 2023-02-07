const Product = require("./product");
const products = [];

module.exports = class Store {
  static itemNumber = 0;

  static addNewProduct(name, price, description, img, imgBig) {
    let product = new Product(Store.itemNumber);
    product.setName(name);
    product.setDescription(description);
    product.setPrice(price);
    product.setImg(img);
    product.setImgBig(imgBig);

    products.push(product);
    Store.itemNumber++;
  }

  static getAllProducts() {
    return products;
  }

  static getProductById(productId) {
    let product = products.find((p) => p.getId() === productId);

    if (product === undefined) throw new Error("Product does not exist.");

    return product;
  }
};
