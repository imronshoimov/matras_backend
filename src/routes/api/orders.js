const router = require("express").Router();
const { getData, insertData } = require("../../controllers/orders");
const { validateOrders } = require("../../middlewares/validate");

router.get("/orders", getData);
router.post("/orders", validateOrders, insertData);

module.exports = router;