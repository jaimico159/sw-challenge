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
        <td class="wrappable">${film.opening_crawl}</td>
        <td>${film.release_date}</td>
      </tr>
    `;
    })
    .join("")}
</table>`;
};

const filmCards = (films) => {
  return `
  ${films.results
    .map((film) => {
      return `
        <div class="card">
          <div class="card-item-info">
            <span class="title">${film.title}</span>
            <span class="director">${film.director}</span>
            <span class="producer">${film.producer}</span>
            <span class="title">${film.release_date}</span>
          </div>
          <div class="card-item-img">
          </div>
        </div>`;
    })
    .join("")}
  `;
};

export { filmsTable, filmCards };
