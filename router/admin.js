const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/add-product", adminController.getAddProducts);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postProducts);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
