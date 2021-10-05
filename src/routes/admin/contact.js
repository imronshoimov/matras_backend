const router = require("express").Router();
const { getData } = require("../../controllers/contact");

router.get("/contact", getData);

module.exports = router;
