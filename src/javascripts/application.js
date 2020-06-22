import People from "./models/People.js";

let el = $("#hello");
let person = new People(el);
console.log("LOOK");
console.log(person);
person.setPeople();
console.log("FINISH");
