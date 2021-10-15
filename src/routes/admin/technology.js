const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/technology");

router.get("/technology", getData);
router.post("/technology", insertData);
router.put("/technology/:id", updateData);
router.patch("/technology/:id", deleteData);

module.exports = router;