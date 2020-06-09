import baseUrl from "../queries/config.js";
import filmsTable from "../templates/films_templates.js";

class Film {
  constructor(el) {
    this.element = el;
    this.fetchUrl = "films/";
    this.films = null;
  }

  setFilms() {
    let clazz = this;
    $.ajax({
      url: baseUrl + this.fetchUrl,
      success: function (response) {
        console.log(response);
        let table = filmsTable(response);
        console.log(table);
        clazz.element.append(table);
        clazz.films = response;
      },
    });
  }
}

export default Film;
