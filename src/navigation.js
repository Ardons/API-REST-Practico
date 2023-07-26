//Variables del DOM



//Funciones----------------------------------------------------------

//Eventos de botones 
searchFormBtn.addEventListener("click", () => {
    location.hash = "search="
});
trendingBtn.addEventListener("click", () => {
    location.hash = "trends"
});
headerArrow.addEventListener("click", () => {
    location.hash = "home"
});


//Eventos de HASH
window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

//Funcion para evaluar en que HASH nos encontramos para ejecutar funciones determinadas
function navigator () {
    console.log({location});

    if (location.hash.startsWith("#trends")) {
        trebdsPage();
    } else if (location.hash.startsWith("#search=")) {
        searchPage();
    } else if (location.hash.startsWith("#movie=")) {
        movieDEtailsPage();
    } else if (location.hash.startsWith("#category=")) {
        categoriesPage();
    } else {
        homePage();
    }
    
}

//Funciones para modificar el HTML segun en que HASH nos encontremos
function homePage () {
    console.log("HOME!!")

    headerSection.classList.remove("header-container--long");
    headerSection.style.backgroun = "";
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
    headerSection.style.backgroun = "";
    headerArrow.classList.remove("inactive");
    headerArrow.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryView.classList.remove("inactive");
    searchForm.classList.add("inactive");

    sectionTrending.classList.add("inactive");
    sectionCategories.classList.add("inactive");

    sectionGenericList.classList.remove("inactive");
    sectionMovieDetail.classList.add("inactive");

    const string = location.hash;
    const array1 = string.split(",");
    console.log(array1)

    getMoviesByCategory(id);

}

function movieDEtailsPage () {
    console.log("Movie!!")

    headerSection.classList.add("header-container--long");
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
}

function searchPage () {
    console.log("Search!!")

    headerSection.classList.remove("header-container--long");
    headerSection.style.backgroun = "";
    headerArrow.classList.remove("inactive");
    headerArrow.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryView.classList.remove("inactive");
    searchForm.classList.remove("inactive");

    sectionTrending.classList.add("inactive");
    sectionCategories.classList.add("inactive");

    sectionGenericList.classList.remove("inactive");
    sectionMovieDetail.classList.add("inactive");

}

function trebdsPage () {
    console.log("TRENDS!!")

    headerSection.classList.remove("header-container--long");
    headerSection.style.backgroun = "";
    headerArrow.classList.remove("inactive");
    headerArrow.classList.remove("header-arrow--white");
    headerTitle.classList.add("inactive");
    headerCategoryView.classList.remove("inactive");
    searchForm.classList.add("inactive");

    sectionTrending.classList.add("inactive");
    sectionCategories.classList.add("inactive");

    sectionGenericList.classList.remove("inactive");
    sectionMovieDetail.classList.add("inactive");
}

