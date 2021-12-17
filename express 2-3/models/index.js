let items = [
  { id: 01, name: "product6" },
  { id: 02, name: "product7" },
  { id: 03, name: "product8" },
];

class Product {
  constructor(name) {
    this.name = name;
  }
  save() {
    const newItem = this.name;
    items.push({
      id: items.length + 1,
      name: newItem,
    });
  }
  static products() {
    return items;
  }
}

module.exports = Product;
