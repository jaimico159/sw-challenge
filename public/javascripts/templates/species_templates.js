const speciesTable = (species) => {
  return `<table id="species-table">
  <tr>
    <th>Name</th>
    <th>Classification</th>
    <th>Designation</th>
    <th>Average Height</th>
    <th>Average Lifespan</th>
    <th>Language</th>
  </tr>
  ${species.results
    .map((specie) => {
      return `
      <tr>
        <td>${specie.name}</td>
        <td>${specie.classification}</td>
        <td>${specie.designation}</td>
        <td>${specie.average_height}</td>
        <td>${specie.average_lifespan}</td>
        <td>${specie.language}</td>
      </tr>
    `;
    })
    .join("")}
</table>`;
};
export default speciesTable;
