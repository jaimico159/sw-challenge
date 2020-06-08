const vehiclesTable = (vehicles) => {
  return `<table id="vehicles-table">
  <tr>
    <th>Name</th>
    <th>Model</th>
    <th>Class</th>
    <th>Manufacturer</th>
    <th>Cost in Credits</th>
    <th>Crew</th>
  </tr>
  ${vehicles.results
    .map((vehicle) => {
      return `
      <tr>
        <td>${vehicle.name}</td>
        <td>${vehicle.model}</td>
        <td>${vehicle.starship_class}</td>
        <td>${vehicle.manufacturer}</td>
        <td>${vehicle.cost_in_credits}</td>
        <td>${vehicle.crew}</td>
      </tr>
    `;
    })
    .join("")}
</table>`;
};
export default vehiclesTable;
