const Product = require("../models/index");

let items = [
  { id: 01, name: "product1" },
  { id: 02, name: "product2" },
  { id: 03, name: "product3" },
];

const index = (req, res) => {
  res.render("index", {
    title: "Home",
  });
};

const products = (req, res) => {
  res.render("products", {
    title: "list of products",
    items: Product.products(),
  });
};

const newProduct = (req, res) => {
  const { newItem } = req.body;
  const product = new Product(newItem);
  product.save();
  res.redirect("/products");
};

const id = (req, res, next) => {
  if (!id) {
    next(error);
  }
  const productId = req.params.id;
  const productName = items.find((e) => e.id === Number(productId));
  res.send(`<h1>Poduct ${productName.name}</h1> `);
};

const patchById = (req, res) => {
  const productId = req.params.id;
  const newName = req.body.name;
  const product = items.find((e) => e.id === Number(productId));
  const productIndex = items.indexOf(product);
  const itemsCopy = [...items];
  itemsCopy[productIndex].name = newName;
  items = itemsCopy;
  res.redirect("/products");
};

const deleteById = (req, res) => {
  const productId = req.params.id;
  const itemsCopy = items.filter((e) => e.id !== Number(productId));
  items = itemsCopy;
  res.redirect("/products");
};

module.exports = {
  index,
  products,
  newProduct,
  id,
  patchById,
  deleteById,
  items,
};
