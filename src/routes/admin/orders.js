const router = require("express").Router();
const { getData, updateData } = require("../../controllers/orders");

router.get("/orders/:page", getData);
router.patch("/orders/:id", updateData);

module.exports = router;