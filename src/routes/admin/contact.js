const router = require("express").Router();
const { getData, contactedData, deleteData, searchData } = require("../../controllers/contact");

router.get("/contact/:page", getData);
router.patch("/contact/:id", contactedData);
router.patch("/contact/:id", deleteData);
router.get("/search/contact", searchData);

module.exports = router;
