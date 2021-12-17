const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");

router.get("/", indexController.index);
router.get("/products", indexController.products);
router.get("/products/:id", indexController.id);
router.post("/products", indexController.newProduct);
router.patch("/products/:id", indexController.patchById);
router.delete("/products/:id", indexController.deleteById);

module.exports = router;
