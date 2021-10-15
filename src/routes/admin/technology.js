const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/technology");
const { validateTechnology } = require("../../middlewares/validate");

router.get("/technology", getData);
router.post("/technology", validateTechnology, insertData);
router.put("/technology/:id", validateTechnology, updateData);
router.patch("/technology/:id", deleteData);

module.exports = router;