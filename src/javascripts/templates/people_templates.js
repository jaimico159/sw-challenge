const peopleTable = (people) => {
  return `<table id="people-table">
  <tr>
    <th>Name</th>
    <th>Birth</th>
    <th>Gender</th>
    <th>Height</th>
    <th>Mass</th>
    <th>Skin Color</th>
  </tr>
  ${people.results
    .map((person) => {
      return `
      <tr>
        <td>${person.name}</td>
        <td>${person.birth}</td>
        <td>${person.gender}</td>
        <td>${person.height}</td>
        <td>${person.mass}</td>
        <td>${person.skin_color}</td>
      </tr>
    `;
    })
    .join("")}
</table>`;
};

const peopleSideNav = async (people) => {
  let elements = ``;
  for (const person of people.results) {
    elements =
      elements +
      `
    <div class="elem">
      <div class="info">
        <span class="name">${person.name}</span>
        <span class="procedence">${await species(person.species)}
        from ${await planet(person.homeworld)}
        </span>
      </div>
      <div class="button-container">
        <img class="center" src="./images/enter.png" height="10" width="10" alt="Go"></img>
      </div>
    </div>
  `;
  }

  return elements;
};

const planet = (url) => {
  return new Promise((resolve) => {
    $.ajax({
      url: url,
      success: function (response) {
        resolve(response.name);
      },
    });
  });
};

const species = async (urls) => {
  if (urls.length === 0) return "Human";
  let results = new Array();
  for (const url of urls) {
    results.push(await specie(url));
  }

  return results.join(", ");
};

const specie = (url) => {
  return new Promise((resolve) => {
    $.ajax({
      url: url,
      success: function (response) {
        console.log(response);
        resolve(response.name);
      },
    });
  });
};

export { peopleTable, peopleSideNav };
