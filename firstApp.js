const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const utils = require("./routes");
const adminData = require("./router/admin");
const shopRoute = require("./router/shop");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);

app.use(shopRoute);

app.use((req, res, next) => {
  res.render("404", { pageTitle: "Error 404" });
});

app.listen(3000);
