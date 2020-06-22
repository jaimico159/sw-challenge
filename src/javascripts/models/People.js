import baseUrl from "../queries/config.js";
import { peopleSideNav } from "../templates/people_templates.js";
import Person from "./Person.js";

class People {
  constructor(el) {
    this.element = el;
    this.fetchUrl = "people/";
    this.people = new Array();
  }

  setPeople() {
    let clazz = this;
    this.element.html("Loading ...");
    $.ajax({
      url: baseUrl + this.fetchUrl,
      success: function (response) {
        for (const p of response.results) {
          clazz.people.push(new Person(p));
        }
        clazz.element.html("");
        console.log(response);
        let table = peopleSideNav(clazz.people, clazz.element);
        console.log(table);
      },
    });
  }
}

export default People;
