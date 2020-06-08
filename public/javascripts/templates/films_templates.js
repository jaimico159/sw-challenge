const filmsTable = (films) => {
  return `<table id="films-table">
  <tr>
    <th>Title</th>
    <th>Director</th>
    <th>Producer</th>
    <th>Height</th>
    <th>Mass</th>
    <th>Release Date</th>
  </tr>
  ${films.results
    .map((film) => {
      return `
      <tr>
        <td>${film.name}</td>
        <td>${film.birth}</td>
        <td>${film.gender}</td>
        <td>${film.height}</td>
        <td>${film.mass}</td>
        <td>${film.skin_color}</td>
      </tr>
    `;
    })
    .join("")}
</table>`;
};
export default fimlsTable;
