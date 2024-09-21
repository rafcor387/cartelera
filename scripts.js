document.getElementById('search').addEventListener('input', function () {
    let filter = this.value.toLowerCase();
    let movies = document.querySelectorAll('.movie');

    movies.forEach(function (movie) {
        let title = movie.querySelector('h2').textContent.toLowerCase();
        if (title.includes(filter)) {
            movie.style.display = '';
        } else {
            movie.style.display = 'none';
        }
    });
});
