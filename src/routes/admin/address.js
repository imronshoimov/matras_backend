const router = require("express").Router();
const { getData, insertData, updateData, deleteData } = require("../../controllers/address");
const { fileUpload } = require("../../lib/multer");
const { validateAddress } = require("../../middlewares/validate");
 
router.get("/address", getData);
router.post("/address", fileUpload.array("images", 3), validateAddress, insertData);
router.put("/address/:id", fileUpload.array("images", 3), validateAddress, updateData);
router.patch("/address/:id", deleteData);

module.exports = router;