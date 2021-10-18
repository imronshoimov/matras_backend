const router = require("express").Router();
const { getData, updateData, searchData } = require("../../controllers/orders");

router.get("/orders/:page", getData);
router.patch("/orders/:id", updateData);
router.get("/search/orders", searchData);

module.exports = router;