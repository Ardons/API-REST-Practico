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
        
        const verificacion = document.getElementById(`${movie.id}`)

        if (verificacion) {
            //console.log("Esta es la verificacion", !!verificacion)
        } else {
            const movieContainer = `
            <div id="${movie.id}" class="movie-container">
                <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="movie-img"
                alt="${movie.original_title}" />
            </div>
            `
            trendingPreviewMovieList.innerHTML += movieContainer;
        }
    })

};


async function getCategoriesPreview() {
    const {data} = await api("genre/movie/list");
    
    console.log("generos " + data);

    const generos = data.genres;
    console.log({ data }, {generos});

    //Limpio el contenedor para que no se sobre-escriba la informacion
    categoriesPreviewArticle.innerHTML = "";

    generos.forEach(genero => {

        const generoContainer = `
            <div class="category-container">
                <h3 id="id${genero.id}" class="category-title" onclick = redireccionCategorias("${genero.id}","${genero.name}")>${genero.name}</h3>
            </div>
            `
        categoriesPreviewArticle.innerHTML += generoContainer;
    });

    
};

function redireccionCategorias(idCategoria, nombreCategoria) {
    location.hash = `category=${idCategoria}-${nombreCategoria}`
}

async function getMoviesByCategory(id) {
    const {data} = await api(`discover/movie`, {
        params: {
            with_genres : id,
        }
    });
    
    const categoriaMovies = data.results;
    console.log("Informacion de las tarjetas" + { data }, { categoriaMovies });
 
    /*movies.forEach(movie => {
        
        const verificacion = document.getElementById(`${movie.id}`)

        if (verificacion) {
            //console.log("Esta es la verificacion", !!verificacion)
        } else {
            const movieContainer = `
            <div id="${movie.id}" class="movie-container">
                <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="movie-img"
                alt="${movie.original_title}" />
            </div>
            `
            trendingPreviewMovieList.innerHTML += movieContainer;
        }
    })*/

};