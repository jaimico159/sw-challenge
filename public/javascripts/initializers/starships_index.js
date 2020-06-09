import Starship from "../models/Starship.js";

let el = $("#starships-table");
let starship_model = new Starship(el);
starship_model.setStarships();
