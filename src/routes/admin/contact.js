const router = require("express").Router();
const { getData, contactedData, deleteData, searchData } = require("../../controllers/contact");
const { checkToken } = require("../../middlewares/checkToken");

router.get("/contact/:page", checkToken, getData);
router.patch("/contact/:id", checkToken, contactedData);
router.patch("/contact/:id", checkToken, deleteData);
router.get("/search/contact", checkToken, searchData);

module.exports = router;
