const router = require("express").Router();
const { loginAdmin } = require("../../controllers/login");
const { checkToken } = require("../../middlewares/checkToken");

router.post("/login", loginAdmin);

module.exports = router;