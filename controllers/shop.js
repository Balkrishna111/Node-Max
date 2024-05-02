const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", { prods: products, pageTitle: "shop" });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  res.redirect("/");
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", { pageTitle: "Index" });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Cart" });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", { pageTitle: "Your Order" });
};

exports.getCheckOut = (req, res, next) => {
  res.render("shop/checkout", { pageTitle: "Checkout" });
};
