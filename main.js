// Bu script fileda moviesni JS codelari yoziladi 
const elList = document.querySelector(".js-movie-card-list");
const shadowElementTemplate = document.querySelector("template").content;
function render_movie(json) {
    json = json.slice(0, 50);
    const docFragment = document.createDocumentFragment();
    json.forEach(function (item) {
        let clone = shadowElementTemplate.cloneNode(true);
        let movie_img = clone.querySelector(".js-movie-picture");
        movie_img.src = item.poster;
        let movie_title = clone.querySelector(".js-movie-title");
        movie_title.textContent = item.title;
        let movie_rating = clone.querySelector(".js-movie-rating");
        movie_rating.textContent = Math.round(Math.random() * 10);
        let movie_year = clone.querySelector(".js-movie-year");
        movie_year.textContent = item.release_date;
        let movie_desc = clone.querySelector(".js-movie-desc");
        movie_desc.textContent = item.overview;
        let movie_genres = clone.querySelector(".js-movie-genres");
        movie_genres.textContent =`Movie genres: ${item.genres.join(", ")}`
        docFragment.append(clone);
    })
    elList.append(docFragment);
}
render_movie(films);