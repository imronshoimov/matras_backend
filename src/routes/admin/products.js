const router = require("express").Router();
const { getData, insertData } = require("../../controllers/products");
const { fileUpload } = require("../../lib/multer");

router.get("/products", getData);
router.post("/products/:id", fileUpload.array("images", 3), insertData);

module.exports = router;