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
            <span class="director">Directed by: ${film.director}</span>
            <span class="producer">Produced by: ${film.producer}</span>
            <span class="title">Released: ${film.release_date}</span>
          </div>
          <div class="card-item-img">
            <img alt="IMAGEN" src="https://images.unsplash.com/photo-1547700055-b61cacebece9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
          </div>
        </div>`;
    })
    .join("")}
  `;
};

export { filmsTable, filmCards };
