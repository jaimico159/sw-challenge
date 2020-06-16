import Person from "./models/Person.js";

let el = $("#hello");
let person = new Person(el);
console.log("LOOK");
console.log(person);
person.setPeople();
console.log("FINISH");
