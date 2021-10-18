const router = require("express").Router();
const { loginAdmin } = require("../../controllers/login");

router.post("/login", loginAdmin);

module.exports = router;