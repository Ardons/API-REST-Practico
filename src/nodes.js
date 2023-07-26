//Seccion HEADER del HTML
const headerSection = document.querySelector("#header");
const searchForm = document.querySelector("#searchForm");

//Seccion Trending del HTML
const sectionTrending = document.querySelector("#trendingPreview");
const trendingPreviewHeader = document.querySelector(".trendingPreview-header");
const trendingPreviewMovieList = document.querySelector(".trendingPreview-movieList");

//Seccion Categories del HTML
const sectionCategories = document.querySelector("#categoriesPreview");
const categoriesPreviewArticle = document.querySelector(".categoriesPreview-list");
//const categoriesConteiner = document.querySelectorAll("#categoriesPreview-article .category-container");

//Seccion Generic List del HTML
const sectionGenericList= document.querySelector("#genericList");

//Seccion Movie Detail List del HTML
const sectionMovieDetail = document.querySelector("#movieDetail");
const movieDetailCategoriesList = document.querySelector("#movieDetail .categories-list");
const movieDetailrelatedMovies = document.querySelector(".relatedMovies-scrollContainer");

//Elementos
const headerTitle = document.querySelector(".header-title");
const headerArrow = document.querySelector(".header-arrow");
const headerCategoryView = document.querySelector(".header-title--categoryView");

const searchFormInput = document.querySelector("#searchForm input");
const searchFormBtn= document.querySelector("#searchBtn");

const trendingBtn = document.querySelector(".trendingPreview-btn");

const movieDetailTitle = document.querySelector(".movieDetail-title");
const movieDetailScore= document.querySelector(".movieDetail-score");
const movieDetailDescription = document.querySelector(".movieDetail-description");