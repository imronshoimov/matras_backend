const router = require("express").Router();
const { getData, updateData } = require("../../controllers/contact");

router.get("/contact", getData);
router.put("/contact/:id", updateData);

module.exports = router;
