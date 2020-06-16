import baseUrl from "./config.js";

function setPeople(element) {
  $.ajax({
    url: baseUrl + "people/",
    cache: true,
    success: function (response) {
      console.log(response);

      element.append();
    },
  });
}

export default setPeople;
