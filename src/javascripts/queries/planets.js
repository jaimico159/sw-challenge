import baseUrl from "./config.js";

function setPlanets(element) {
  $.ajax({
    url: baseUrl + "planets/",
    cache: true,
    success: function (response) {
      console.log(response);

      element.append();
    },
  });
}

export default setPlanets;
