module.exports = class Product {
  constructor(id) {
    this._id = id;
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
    this._description;
  }
};
