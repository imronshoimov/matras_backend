const router = require("express").Router();
const { getData, insertData } = require("../../controllers/products");
const fileUpload = require("../../lib/multer");

router.get("/products", getData);
router.post("/products", fileUpload("products").array(), insertData);

module.exports = router;