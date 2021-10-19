const router = require("express").Router();
const apiRoutes = require("./api")
const adminRoutes = require("./admin");

router.use("/api", apiRoutes);
router.use("/admin", adminRoutes);
router.use("/api", (req, res) =>
	res.status(404).json({ status: 404, message: "No API route found" })
);

router.get("/", (req, res) => res.send("Ok"))

module.exports = router;
