import baseUrl from "./config.js";

function setVehicles(element) {
  $.ajax({
    url: baseUrl + "vehicles/",
    cache: true,
    success: function (response) {
      console.log(response);

      element.append();
    },
  });
}

export default setVehicles;
