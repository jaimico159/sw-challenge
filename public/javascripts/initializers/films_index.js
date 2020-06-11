import Film from "../models/Film.js";

let el = $("#films-grid");
let film_model = new Film(el);
film_model.setFilms();
