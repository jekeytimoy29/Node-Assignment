module.exports = class Product {
  constructor(id) {
    this._id = id;
  }

  setImg(value) {
    this._img = value;
  }

  setImgBig(value) {
    this._imgBig = value;
  }

  setName(value) {
    this._name = value;
  }

  setPrice(value) {
    this._price = value;
  }

  setDescription(value) {
    this._description = value;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  getPrice() {
    return this._price;
  }

  getDescription() {
    return this._description;
  }

  getImg() {
    return this._img;
  }

  getImgBig() {
    return this._imgBig;
  }
};
