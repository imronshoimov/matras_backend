const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/products");
const fileUpload = require("../../lib/multer");
const { validateProducts } = require("../../middlewares/validate");

router.get("/products", getData);
router.post("/products/:id", fileUpload("products").array("images", 12), validateProducts, insertData);
router.put("/products/:id", fileUpload("products").array("images", 12), validateProducts, updateData);
router.patch("/products/:id", deleteData);

module.exports = router;