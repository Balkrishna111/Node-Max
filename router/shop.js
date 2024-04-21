const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Welcome to my ExpressJs App</h1>");
  next();
});

module.exports = router;
