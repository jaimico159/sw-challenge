import Vehicle from "../models/Vehicle.js";

let el = $("#vehicles-table");
let vehicle_model = new Vehicle(el);
vehicle_model.setVehicles();
