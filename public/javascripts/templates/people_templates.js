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
  return `
    ${people.results
      .map((person) => {
        return `
        <div class="elem">
          <span>${person.name}</span>
          <span>${person.birth}</span>
        </div>
      `;
      })
      .join("")}
  `;
};

export { peopleTable, peopleSideNav };
