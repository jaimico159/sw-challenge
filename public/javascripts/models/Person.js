import baseUrl from "../queries/config.js";
import { peopleSideNav } from "../templates/people_templates.js";

class Person {
  constructor(el) {
    this.element = el;
    this.fetchUrl = "people/";
    this.people = null;
  }

  setPeople() {
    let clazz = this;
    this.element.html("Loading ...");
    $.ajax({
      url: baseUrl + this.fetchUrl,
      success: function (response) {
        clazz.element.html("");
        console.log(response);
        let table = peopleSideNav(response);
        console.log(table);
        clazz.element.append(table);
        clazz.people = response;
      },
    });
  }
}

export default Person;
