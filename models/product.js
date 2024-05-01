const path = require("path");
const fs = require("fs");

module.exports = class Product {
  constructor(t, imageUrl, price, description) {
    this.title = t;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      } else {
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
        products.push(this);
      }
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
