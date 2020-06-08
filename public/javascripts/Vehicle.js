import baseUrl from "./queries/config.js";
import peopleTable from "./templates/people_templates.js";

class Vehicle {
  constructor(el) {
    this.element = el;
    this.fetchUrl = "vehicles/";
    this.people = null;
  }

  setPeople() {
    let clazz = this;
    $.ajax({
      url: baseUrl + this.fetchUrl,
      success: function (response) {
        console.log(response);
        let table = peopleTable(response);
        console.log(table);
        clazz.element.append(table);
        clazz.people = response;
      },
    });
  }
}

export default Person;
