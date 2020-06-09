const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({

  name: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  color: { type: String, required: true },
  year: { type: String, required: true },
  trim: { type: String, required: true },
  vin: { type: String, required: true }
});

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

module.exports = Vehicle;
