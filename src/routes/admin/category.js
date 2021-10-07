const router = require("express").Router();
const { getData, insertData } = require("../../controllers/category");

router.get("/categories", getData);
router.post("/categories", insertData);

module.exports = router;