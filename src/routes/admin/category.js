const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/category");
const { validateCategory } = require("../../middlewares/validate");

router.get("/categories", getData);
router.post("/categories", validateCategory, insertData);
router.put("/categories/:id", updateData);
router.patch("/categories/:id", deleteData);

module.exports = router;