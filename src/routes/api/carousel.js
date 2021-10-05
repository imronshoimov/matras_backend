const router = require("express").Router();
const { getData, insertData } = require("../../controllers/carousel");

router.get("/carousel", getData);

module.exports = router;
