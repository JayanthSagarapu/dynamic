const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(p, (err, filecontent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(filecontent);
      }

      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];

      let updatedProduct;

      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, filecontent) => {
      if (err) {
        return;
      }
      cart = JSON.parse(filecontent);
      const presentCart = { ...cart };
      const prodToDel = presentCart.products.find((prod) => prodid === id);
      const prodToDelQty = prodToDel.qty;

      presentCart.products = presentCart.products.filter(
        (prod) => prod.id !== id
      );
      presentCart.totalPrice =
        presentCart.totalPrice - productPrice * prodToDelQty;

      fs.writeFile(p, JSON.stringify(presentCart), (err) => {
        console.log(err);
      });
    });
  }
};
