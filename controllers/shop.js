const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", { prods: products, pageTitle: "shop" });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", { pageTitle: "Index" });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Cart" });
};

exports.getCheckOut = (req, res, next) => {
  res.render("shop/checkout", { pageTitle: "Checkout" });
};
