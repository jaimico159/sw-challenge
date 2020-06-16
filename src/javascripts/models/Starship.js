import baseUrl from "../queries/config.js";
import starshipsTable from "../templates/starships_templates.js";

class Starship {
  constructor(el) {
    this.element = el;
    this.fetchUrl = "starships/";
    this.starships = null;
  }

  setStarships() {
    let clazz = this;
    $.ajax({
      url: baseUrl + this.fetchUrl,
      success: function (response) {
        console.log(response);
        let table = starshipsTable(response);
        console.log(table);
        clazz.element.append(table);
        clazz.starships = response;
      },
    });
  }
}

export default Starship;
