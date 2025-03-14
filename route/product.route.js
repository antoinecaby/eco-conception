const express = require("express");
const productController = require("./../controller/product.controller.js");

const router = express.Router();

router.get("/", () => {});
router.get("/:id", productController.getById);
router.get("/pagination/:page", productController.getPagination);
router.get("/pagination2/:page", productController.getPagination2);
router.post("/", productController.create);
router.put("/:id", () => {});
router.delete("/:id", () => {});

module.exports = router;
