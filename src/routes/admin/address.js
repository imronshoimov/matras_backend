const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/address");
const { fileUpload } = require("../../lib/multer");

router.get("/address", getData);
router.post("/address", fileUpload.array("images", 3), insertData);
router.put("/address", fileUpload.array("images", 3), updateData);
router.patch("/address", deleteData);

module.exports = router;