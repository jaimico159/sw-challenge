import baseUrl from "./config.js";

function setStarships(element) {
  $.ajax({
    url: baseUrl + "starships/",
    cache: true,
    success: function (response) {
      console.log(response);

      element.append();
    },
  });
}

export default setStarships;
