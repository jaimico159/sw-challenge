import baseUrl from "../queries/config.js";
import vehiclesTable from "../templates/vehicles_templates.js";

class Vehicle {
  constructor(el) {
    this.element = el;
    this.fetchUrl = "vehicles/";
    this.vehicles = null;
  }

  setVehicles() {
    let clazz = this;
    $.ajax({
      url: baseUrl + this.fetchUrl,
      success: function (response) {
        console.log(response);
        let table = vehiclesTable(response);
        console.log(table);
        clazz.element.append(table);
        clazz.vehicles = response;
      },
    });
  }
}

export default Vehicle;
