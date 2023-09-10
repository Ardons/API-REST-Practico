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

//Utils
function createMovies(movies, container) {
    container.innerHTML = "";
    movies.forEach(movie => {
        
        
        const movieContainer = `
            <div onclick="detallePelicula(${movie.id})" class="movie-container">
                <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="movie-img" alt="${movie.original_title}" />
            </div>
            `
            container.innerHTML += movieContainer;        
    })
        
}

//Cambiar el location hash al dar click en una pelicula para ver el detalle
function detallePelicula (id){
    location.hash = `#movie=${id}`;
}

async function getDetalles(idPelicula) {
    
    const {data} = await api(`movie/${idPelicula}`);
    console.log(data)

    //Se cambia el titulo de la pelicula, se coloca la descripcion y se coloca la valoracion
    movieDetailTitle.textContent = data.title;
    movieDetailDescription.textContent = data.overview;
    movieDetailScore.textContent = data.vote_average.toPrecision(3);

    //cambiar la imagen del poster principal VERSION 1
    /*console.log(data.poster_path)
    const headerLong = document.querySelector(".header-container--long");
    headerSection.classList.add("header-container--long");
    headerLong.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${data.poster_path}")`;*/
    //headerConteiner.style.backgroundImage = `url("https://image.tmdb.org/t/p/w300${data.poster_path}")`;

    //cambiar la imagen del poster principal VERSION 2
    headerSection.style.background = `
    linear-gradient(180deg, rgba(0, 0, 0, 0.35) 19.27%, rgba(0, 0, 0, 0) 29.17%),
    url("https://image.tmdb.org/t/p/w500${data.poster_path}")`

    //se introducen los generos segun la pelicula
    const generos = data.genres;     
    createCategories(generos, movieDetailCategoriesList);

};

async function getDetallesSimilares(idPelicula) {
    
    const {data} = await api(`movie/${idPelicula}/similar`);
    console.log("Peliculas similares: ", data.results) 
    const similares = data.results;     

    //se introducen las peliculas similares
    createMovies(similares, peliculasSimilares);
    
};



function createCategories(categories, container) {
    container.innerHTML = "";

    categories.forEach(genero => {

        const generoContainer = `
            <div class="category-container">
                <h3 id="id${genero.id}" class="category-title" onclick = redireccionCategorias("${genero.id}","${genero.name}")>${genero.name}</h3>
            </div>
            `
        container.innerHTML += generoContainer;
        
    });

};

async function getTrendingMoviesPreview() {
    const {data} = await api("trending/movie/day");
    
    const movies = data.results;
    console.log("Informacion de las tarjetas" + { data }, { movies });

    createMovies(movies, trendingPreviewMovieList);
};

async function getCategoriesPreview() {
    const {data} = await api("genre/movie/list");
    
    //console.log("generos " + data);
    const generos = data.genres;
    //console.log("Informacion generos" ,{ data }, {generos});

    createCategories(generos, categoriesPreviewArticle);
    
};

function redireccionCategorias(idCategoria, nombreCategoria) {
    location.hash = `category=${idCategoria}-${nombreCategoria}`
}

async function getMoviesByCategory(id) {
    const {data} = await api("discover/movie", {
        params: {
            with_genres : id,
        }
    });
    
    const categoriaMovies = data.results;
    //console.log({ categoriaMovies });

    createMovies(categoriaMovies, sectionGenericList);

};

async function getMoviesBySearch(filtro) {
    const {data} = await api("search/movie", {
        params: {
            query : filtro,
        }
    });
    
    const peliculasFiltradas = data.results;
    //console.log({ peliculasFiltradas });

    createMovies(peliculasFiltradas, sectionGenericList);
};

async function getTrendingMovies() {
    const {data} = await api("trending/movie/day");
    
    const movies = data.results;
    //console.log("Informacion de las tarjetas" + { data }, { movies });
    console.log(movies)

    createMovies(movies, sectionGenericList);
};

/*movieContainer2.addEventListener("click", () => {
    alert("hola")
})*/
