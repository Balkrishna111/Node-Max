const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const utils = require("./routes");
const adminRoute = require("./router/admin");
const shopRoute = require("./router/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);

app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).send("<h1>Error 404: page not found!!!</h1>");
});

app.listen(3000);
