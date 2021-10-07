const router = require("express").Router();
const { getData, insertData, updateData } = require("../../controllers/category");

router.get("/categories", getData);
router.post("/categories", insertData);
router.put("/categories/:id", updateData);

module.exports = router;