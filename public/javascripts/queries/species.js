import baseUrl from "./config.js";

function setSpecies(element) {
  $.ajax({
    url: baseUrl + "species/",
    cache: true,
    success: function (response) {
      console.log(response);

      element.append();
    },
  });
}

export default setSpecies;
