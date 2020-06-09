import axios from "axios";

export default {
  // Gets all garage
  getVehicles: function () {
    return axios.get("/api/vehicles");
  },
  // Gets the Garage with the given id
  getVehicle: function (id) {
    return axios.get("/api/vehicles/" + id);
  },
  // Deletes the Garage with the given id
  deleteVehicle: function (id) {
    return axios.delete("/api/vehicles/" + id);
  },
  // Saves a Garage to the database
  saveVehicle: function (vehicleData) {
    return axios.post("/api/vehicles", vehicleData);
  }
};
