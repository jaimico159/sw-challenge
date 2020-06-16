const starshipsTable = (starships) => {
  return `<table id="starships-table">
  <tr>
    <th>Name</th>
    <th>Model</th>
    <th>Class</th>
    <th>Manufacturer</th>
    <th>Cost in Credits</th>
    <th>Crew</th>
  </tr>
  ${starships.results
    .map((sharship) => {
      return `
      <tr>
        <td>${sharship.name}</td>
        <td>${sharship.model}</td>
        <td>${sharship.starship_class}</td>
        <td>${sharship.manufacturer}</td>
        <td>${sharship.cost_in_credits}</td>
        <td>${sharship.crew}</td>
      </tr>
    `;
    })
    .join("")}
</table>`;
};
export default starshipsTable;
