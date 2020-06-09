const router = require("express").Router();
const vehiclesController = require("../../controllers/vehiclesController");

// Matches with "/api/books"
router.route("/")
  .get(vehiclesController.findAll)
  .post(vehiclesController.create);

// Matches with "/api/vehicles/:id"
router
  .route("/:_id")
  .get(vehiclesController.findById)
  .put(vehiclesController.update)
  .delete(vehiclesController.remove);

module.exports = router;
