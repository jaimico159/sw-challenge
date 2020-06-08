const planetsTable = (planets) => {
  return `<table id="planets-table">
  <tr>
    <th>Name</th>
    <th>Diameter</th>
    <th>Rotation Period</th>
    <th>Orbital Perior</th>
    <th>Gravity</th>
    <th>Population</th>
  </tr>
  ${planets.results
    .map((planet) => {
      return `
      <tr>
        <td>${planet.name}</td>
        <td>${planet.diameter}</td>
        <td>${planet.rotation_period}</td>
        <td>${planet.orbital_period}</td>
        <td>${planet.gravity}</td>
        <td>${planet.population}</td>
      </tr>
    `;
    })
    .join("")}
</table>`;
};
export default planetsTable;
