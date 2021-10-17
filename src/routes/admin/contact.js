const router = require("express").Router();
const { getData, contactedData, deleteData } = require("../../controllers/contact");

router.get("/contact", getData);
router.patch("/contact/:id", contactedData);
router.patch("/contact/:id", deleteData);

module.exports = router;
