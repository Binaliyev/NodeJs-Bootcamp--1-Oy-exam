// Bu script fileda moviesni JS codelari yoziladi 
const elList = document.querySelector(".js-movie-card-list");
const shadowElementTemplate = document.querySelector("template").content;
function renderMovie(json) {
    json = json.slice(0, 20);
    const docFragment = document.createDocumentFragment();
    json.forEach(function (item) {
        let clone = shadowElementTemplate.cloneNode(true);
        let movieImg = clone.querySelector(".js-movie-picture");
        movieImg.src = item.poster;
        let movieTitle = clone.querySelector(".js-movie-title");
        movieTitle.textContent = item.title;
        let movieRating = clone.querySelector(".js-movie-rating");
        movieRating.textContent = Math.round(Math.random() * 10);
        let movieYear = clone.querySelector(".js-movie-year");
        movieYear.textContent = item.release_date;
        let movieDesc = clone.querySelector(".js-movie-desc");
        movieDesc.textContent = item.overview;
        let movieGenres = clone.querySelector(".js-movie-genres");
        movieGenres.textContent = `Movie genres: ${item.genres.join(", ")}`
        docFragment.append(clone);
    })
    elList.append(docFragment);
}
renderMovie(films);