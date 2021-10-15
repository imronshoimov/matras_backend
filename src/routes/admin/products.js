const router = require("express").Router();
const { getData, insertData, updateData } = require("../../controllers/products");
const { fileUpload } = require("../../lib/multer");

router.get("/products", getData);
router.post("/products/:id", fileUpload.array("images", 12), insertData);
router.put("/products/:id", fileUpload.array("images", 12), updateData);

module.exports = router;