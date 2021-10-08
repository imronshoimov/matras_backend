const router = require("express").Router();
const { getData, insertData } = require("../../controllers/products");

router.get("/products", getData);
router.post("/products", insertData);

module.exports = router;