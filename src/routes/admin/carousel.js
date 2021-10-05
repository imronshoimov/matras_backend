const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/carousel");
const fileUpload = require("../../lib/multer");
const { validateCarousel } = require("../../middlewares/validate");

router.get("/carousel", getData);
router.post("/carousel", fileUpload("carousel"), validateCarousel, insertData);
router.put("/carousel/:id", fileUpload("carousel"), validateCarousel, updateData);
router.delete("/carousel/:id", deleteData);

module.exports = router;