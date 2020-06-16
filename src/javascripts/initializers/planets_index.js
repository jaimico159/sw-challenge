import Planet from "../models/Planet.js";

let el = $("#planets-table");
let planet_model = new Planet(el);
planet_model.setPlanets();
