import Person from "../models/Person.js";

let el = $("#people-table");
let person_model = new Person(el);
person_model.setPeople();
