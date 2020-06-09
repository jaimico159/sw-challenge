import Film from "../models/Film.js";

let el = $("#films-table");
let film_model = new Film(el);
film_model.setFilms();
