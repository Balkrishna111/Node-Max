const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/add-product", adminController.getAddProducts);

router.get("/products");

router.post("/product", adminController.postProducts);

module.exports = router;
