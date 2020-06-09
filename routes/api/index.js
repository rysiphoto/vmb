const router = require("express").Router();
const vehicleRoutes = require("./vehicles");

// vehicle routes
router.use("/vehicles", vehicleRoutes);

module.exports = router;
