//Variables




//Funciones----------------------------------------------------------

//Eventos de botones 
searchFormBtn.addEventListener("click", () => {
    
    location.hash = `search=${searchFormInput.value}`;
});

trendingBtn.addEventListener("click", () => {
    location.hash = "trends"
});

//Funcion para ir "atras"
headerArrow.addEventListener("click", () => {
    history.back();

    
});


//Eventos de HASH
window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

//Funcion para evaluar en que HASH nos encontramos para ejecutar funciones determinadas
function navigator () {
    //console.log({location});
    
    if (location.hash.startsWith("#trends")) {
        trebdsPage();       
    } else if (location.hash.startsWith("#search=")) {
        searchPage();      
    } else if (location.hash.startsWith("#movie=")) {
        movieDetailsPage();
    } else if (location.hash.startsWith("#category=")) {
        categoriesPage();
    } else {       
        homePage();  
    }

    

    //Esta funcion permite reiniciar el scroll
    window.scrollTo(0,0);
}

//Funciones para modificar el HTML segun en que HASH nos encontremos
function homePage () {
    console.log("HOME!!")

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    headerArrow.classList.add("inactive");
    headerArrow.classList.remove("header-arrow--white");
    headerTitle.classList.remove("inactive");
    headerCategoryView.classList.add("inactive");
    searchForm.classList.remove("inactive");

    sectionTrending.classList.remove("inactive");
    sectionCategories.classList.remove("inactive");

    sectionGenericList.classList.add("inactive");
    sectionMovieDetail.classList.add("inactive");
    
    //Ejecutar funciones
    getTrendingMoviesPreview();
    getCategoriesPreview();
      
}

function categoriesPage () {
    console.log("categories!!")

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    headerArrow.classList.remove("inactive");
    headerArrow.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryView.classList.remove("inactive");
    searchForm.classList.add("inactive");

    sectionTrending.classList.add("inactive");
    sectionCategories.classList.add("inactive");

    sectionGenericList.classList.remove("inactive");
    sectionMovieDetail.classList.add("inactive");

    //Se guarda en variable el HASH
    const stringHash = location.hash;
    const arrayHash = [...stringHash];
    
    //Se crea la funcionalidad para extraer el numero de la categoria del HASH
    const arrayCategorias = arrayHash.map((string) => {
            if (!isNaN(Number(string))) {
                return Number(string)
            } else {
                return Number(string);
            }
    }).filter((numero) => !isNaN(numero)).join("");    
    //const arrayCategorias2 = Number(arrayCategorias);    
    //console.log("La Categoria escogida es: ", arrayCategorias)    

    const [_, categoria] = location.hash.split("=");
    const [idCategoria, nameCategory]= categoria.split("-")


    headerCategoryView.innerHTML = nameCategory;
    getMoviesByCategory(arrayCategorias);
    
    
}

function movieDetailsPage () {
    console.log("Movie!!")

    headerSection.classList.add("header-container--long");
    console.log("MovieDetailsPage")
    //headerSection.style.backgroun = "";
    headerArrow.classList.remove("inactive");
    headerArrow.classList.add("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryView.classList.add("inactive");
    searchForm.classList.add("inactive");

    sectionTrending.classList.add("inactive");
    sectionCategories.classList.add("inactive");

    sectionGenericList.classList.add("inactive");
    sectionMovieDetail.classList.remove("inactive");

    //sacar el id de la pelicula
    const [_,idPelicula] = location.hash.split("=");


    //agregar funciones
    getDetalles(idPelicula);
    getDetallesSimilares(idPelicula);
    
}

function searchPage () {
    console.log("Search!!")

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    headerArrow.classList.remove("inactive");
    headerArrow.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryView.classList.add("inactive");
    searchForm.classList.remove("inactive");

    sectionTrending.classList.add("inactive");
    sectionCategories.classList.add("inactive");

    sectionGenericList.classList.remove("inactive");
    sectionMovieDetail.classList.add("inactive");

    const [_, filtro] = location.hash.split("=");
    getMoviesBySearch(filtro);

}

function trebdsPage () {
    console.log("TRENDS!!")

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    headerArrow.classList.remove("inactive");
    headerArrow.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryView.classList.remove("inactive");
    searchForm.classList.add("inactive");

    sectionTrending.classList.add("inactive");
    sectionCategories.classList.add("inactive");

    sectionGenericList.classList.remove("inactive");
    sectionMovieDetail.classList.add("inactive");

    headerCategoryView.innerHTML = "Tendencias";
    getTrendingMovies();
}

