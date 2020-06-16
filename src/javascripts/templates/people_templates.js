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

const peopleSideNav = (people) => {
  return Promise.all(
    people.results.map((person) => {
      return `
        <div class="elem">
          <span>${person.name}</span>
          <span>${await species(person.species)}
           from ${await planet(person.homeworld)}
          </span>
        </div>
      `;
    })
  ).then((data) => {
    console.log(data);
    data.join(", ");
  });
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

const species = (urls) => {
  return new Promise((resolve) => {
    resolve(
      Promise.all(
        urls
          .map(async (url) => {
            return await specie();
          })
          .join(", ")
      )
    );
  });
};

const specie = (url) => {
  return new Promise((resolve) => {
    $.ajax({
      url: url,
      success: function (response) {
        resolve(response.name);
      },
    });
  });
};

export { peopleTable, peopleSideNav };
