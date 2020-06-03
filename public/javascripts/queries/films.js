import baseUrl from "./config.js";

function setFilms(element) {
  $.ajax({
    url: baseUrl + "films/",
    cache: true,
    success: function (response) {
      console.log(response);

      element.append();
    },
  });
}

export default setFilms;
