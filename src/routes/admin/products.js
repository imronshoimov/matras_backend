const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/products");
const { fileUpload } = require("../../lib/multer");

router.get("/products", getData);
router.post("/products/:id", fileUpload.array("images", 12), insertData);
router.put("/products/:id", fileUpload.array("images", 12), updateData);
router.patch("/products/:id", deleteData);

module.exports = router;