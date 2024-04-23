const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getShop = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", { prods: products, pageTitle: "shop" });
  });
};
