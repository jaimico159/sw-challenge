import baseUrl from "../queries/config.js";
import speciesTable from "../templates/species_templates.js";

class Specie {
  constructor(el) {
    this.element = el;
    this.fetchUrl = "species/";
    this.species = null;
  }

  setSpecies() {
    let clazz = this;
    $.ajax({
      url: baseUrl + this.fetchUrl,
      success: function (response) {
        console.log(response);
        let table = speciesTable(response);
        console.log(table);
        clazz.element.append(table);
        clazz.species = response;
      },
    });
  }
}

export default Specie;
