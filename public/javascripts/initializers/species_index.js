import Specie from "../models/Specie.js";

let el = $("#species-table");
let specie_model = new Specie(el);
specie_model.setSpecies();
