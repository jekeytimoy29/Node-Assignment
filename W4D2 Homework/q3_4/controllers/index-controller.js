const inventory = require("../models/inventory");

exports.homePage = (req, res) => {
  res.render("index", { title: "Home", products: inventory });
};
