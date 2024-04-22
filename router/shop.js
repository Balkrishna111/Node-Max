const express = require("express");
const path = require("path");
const router = express.Router();

const adminData = require("./admin");

const products = adminData.products;

router.get("/", (req, res, next) => {
  res.render("shop", { prods: products, title: "shop" });
});

module.exports = router;
