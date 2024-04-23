const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./router/admin");
const shopRoute = require("./router/shop");
const errorController = require("./controllers/error");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", routes);

app.use(shopRoute);

app.use(errorController.errorPage);

app.listen(3000);
