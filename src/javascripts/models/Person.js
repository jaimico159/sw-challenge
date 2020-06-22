import { personSideNavElement } from "../templates/people_templates.js";

class Person {
  constructor(json_data) {
    this.id = json_data.url
      .match(/\/(\d+)+[\/]?/g)
      .map((id) => id.replace(/\//g, ""))[0];

    this.name = json_data.name;
    this.birth_year = json_data.birth_year;
    this.eye_color = json_data.eye_color;
    this.gender = json_data.gender;
    this.height_color = json_data.height_color;
    this.films = json_data.films;
    this.species = json_data.species;
    this.starships = json_data.starships;
    this.vehicles = json_data.vehicles;
    this.homeworld = json_data.homeworld;
    this.url = json_data.url;

    this.sidenav = null;
    this.species_array = null;
    this.vehicles_array = new Array();
    this.has_vehicles = false;
  }

  async getVehicles() {
    if (this.has_vehicles) return;
    let clazz = this;
    for (const vehicle of clazz.vehicles) {
      let resp = await new Promise((resolve) => {
        $.ajax({
          url: vehicle,
          success: function (response) {
            resolve(response);
          },
        });
      });
      clazz.vehicles_array.push(resp);
    }
    this.has_vehicles = true;
  }

  async showInfo() {
    await this.getVehicles();

    let eye_color = $("#eye-color");
    let hair_color = $("#hair-color");
    let skin_color = $("#skin-color");
    let birth_color = $("#birth-year");

    eye_color.html(this.eye_color);
    hair_color.html(this.hair_color);
    skin_color.html(this.skin_color);
    birth_color.html(this.birth_year);

    let vehicles_list = $("#vehicles-list");

    for (const vehicle of this.vehicles_array) {
      vehicles_list.append(`
      <div class="detail"><span>${vehicle.name}</span></div>
      `);
    }

    $("#person-info").show();
  }

  hideInfo() {
    let eye_color = $("#eye-color");
    let hair_color = $("#hair-color");
    let skin_color = $("#skin-color");
    let birth_color = $("#birth-year");

    eye_color.html("");
    hair_color.html("");
    skin_color.html("");
    birth_color.html("");

    let vehicles_list = $("#vehicles-list");

    $("#person-info").hide();
  }
}

export default Person;
