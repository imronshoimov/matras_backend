const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/statistics");
const { validateStatistics } = require("../../middlewares/validate");

router.get("/statistics", getData);
// router.post("/statistics", validateStatistics, insertData);
router.put("/statistics", validateStatistics, updateData);
// router.patch("/statistics", deleteData);

module.exports = router;