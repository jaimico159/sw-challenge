const filmsTable = (films) => {
  return `<table id="films-table">
  <tr>
    <th>Title</th>
    <th>Director</th>
    <th>Producer</th>
    <th>URL</th>
    <th>Opening Crawl</th>
    <th>Release Date</th>
  </tr>
  ${films.results
    .map((film) => {
      return `
      <tr>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td>${film.producer}</td>
        <td>${film.url}</td>
        <td>${film.opening_crawl}</td>
        <td>${film.release_date}</td>
      </tr>
    `;
    })
    .join("")}
</table>`;
};

export default filmsTable;
