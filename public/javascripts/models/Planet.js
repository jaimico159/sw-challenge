import baseUrl from "../queries/config.js";
import planetsTable from "../templates/planets_templates.js";

class Planet {
  constructor(el) {
    this.element = el;
    this.fetchUrl = "planets/";
    this.planets = null;
  }

  setPlanets() {
    let clazz = this;
    $.ajax({
      url: baseUrl + this.fetchUrl,
      success: function (response) {
        console.log(response);
        let table = planetsTable(response);
        console.log(table);
        clazz.element.append(table);
        clazz.planets = response;
      },
    });
  }
}

export default Planet;
