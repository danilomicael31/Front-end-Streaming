document.addEventListener("DOMContentLoaded", function () {
  fetchMovies();
});

function fetchMovies() {
  fetch("URL-RINALDO")
    .then((response) => response.json())
    .then((data) => {
      if (data && data.length > 0) {
        displayMovies(data);
      } else {
        console.log("Nenhum filme encontrado.");
      }
    })
    .catch((error) => {
      console.error("Erro ao buscar filmes:", error);
    });
}

function displayMovies(movies) {
  movies.forEach((movie, index) => {
    const titleElement = document.getElementById("title" + (index + 1));
    const genreElement = document.getElementById("genre" + (index + 1));
    const yearElement = document.getElementById("year" + (index + 1));
    const imageElement = document.getElementById("image" + (index + 1));

    if (titleElement && genreElement && yearElement && imageElement) {
      titleElement.textContent = movie.title;
      genreElement.textContent = movie.genre;
      yearElement.textContent = movie.year;
      imageElement.src = movie.imageUrl;
      imageElement.alt = movie.title;
    }
  });
}
