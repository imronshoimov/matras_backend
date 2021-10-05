const router = require("express").Router();
const { getData, updateData } = require("../../controllers/orders");

router.get("/orders", getData);
router.put("/orders/:id", updateData);

module.exports = router;