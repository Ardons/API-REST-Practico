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

    
    const stringHash = location.hash;
    const arrayHash = [...stringHash];
    
    
    const arrayCategorias = arrayHash.map((string) => {
            if (!isNaN(Number(string))) {
                return Number(string)
            } else {
                return Number(string);
            }
    }).filter((numero) => !isNaN(numero)).join("")
    console.log("ARRAY CATEGORIAS: ", arrayCategorias, typeof(arrayCategorias))
    //const arrayCategorias2 = Number(arrayCategorias)

    
    let newArray = [];
    
    for (let i = 10; i < arrayHash .length; i++) {
        if (arrayHash [i] === "-") {
            break;
        }else {
            newArray.push(arrayHash [i])
        }
    }
    console.log("NEW ARRAY: ", newArray)
    //const numeroCategoria = Number(newArray.join(""));
    const numeroCategoria = newArray.join("");

        
    getMoviesByCategory(numeroCategoria);

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

