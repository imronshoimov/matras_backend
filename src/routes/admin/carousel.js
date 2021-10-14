const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/carousel");
const { fileUpload } = require("../../lib/multer");
const { validateCarousel } = require("../../middlewares/validate");

router.get("/carousel", getData);
router.post("/carousel", fileUpload.single("image"), validateCarousel, insertData);
router.put("/carousel/:id", fileUpload.single("image"), validateCarousel, updateData);
router.delete("/carousel/:id", deleteData);

module.exports = router;