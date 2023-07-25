//Variables

//Variables - APIs


//Axios
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
    params: {
        "api_key": API_KEY,
    }
})


//Funciones--------------------------------------------------------------------------------------

async function getTrendingMoviesPreview() {
    const {data} = await api("trending/movie/day");
    

    const movies = data.results;
    console.log("Informacion de las tarjetas" + { data }, { movies });

    movies.forEach(movie => {
        const contenedorMovie = document.querySelector(".trendingPreview-movieList");

        const movieContainer = `
            <div class="movie-container">
                <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="movie-img"
                alt="${movie.original_title}" />
            </div>
            `

        contenedorMovie.innerHTML += movieContainer;

    })

};

async function getCategoriesPreview() {
    const {data} = await api("genre/movie/list");
    
    console.log("generos " + data);

    const generos = data.genres;
    console.log({ data }, {generos});

    generos.forEach(genero => {
        const contenedorGeneros = document.querySelector("#categoriesPreview-article");

        const generoContainer = `
            <div class="category-container">
                <h3 id="id${genero.id}" class="category-title">${genero.name}</h3>
            </div>
            `
        
        contenedorGeneros.innerHTML += generoContainer;

    });

};

getTrendingMoviesPreview();
getCategoriesPreview();
