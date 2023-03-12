const fullPage = document.querySelector(".fullPage");

let parameters = new URLSearchParams(window.location.search)
let ID = parameters.get("id");

let arrOfCarouselImagesLinks = []

const leftButton  = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

const sliders = document.querySelectorAll(".carousel div");


async function getMovieInfoById(id){
    try {
        let filmInfo = (await request(GET_MOVIE_DETAILS(`${id}`),"GET"));

        document.title = filmInfo.title
        document.querySelector(".filmPoster img").src = `${await (GET_IMAGE(filmInfo.poster_path))}`
        document.querySelector(".filmName").innerText = filmInfo.title
        document.querySelector(".releaseDate span").innerText = filmInfo.release_date
        document.querySelector(".rating span").innerText = filmInfo.vote_average

        let filmCredits = (await request(GET_MOVIE_CREDITS(ID)))
        filmCredits.crew.filter(x=>{
            if (x.job === "Director"){
                document.querySelector(".filmDirector span").innerText = x.name
            }
        })


        for (let i = 0;i < filmCredits.cast.length; i++){
            if (filmCredits.cast[i].profile_path){
                arrOfCarouselImagesLinks.push(await GET_IMAGE(filmCredits.cast[i].profile_path))
            }
            if ( i === 0 || i === 1 || i === 2){
                sliders[i].style.background = `url(${arrOfCarouselImagesLinks[i]})`
            }
        }
        return filmInfo
    }catch (err){
        console.log(err)
    }
}

getMovieInfoById(ID)


const trailers = document.querySelector(".trailers")

function createTrailerCard(src){
    const trailer = document.createElement("div");
    trailer.setAttribute("class","eachTrailer");
    trailer.style.background = `url(https://i1.ytimg.com/vi/${src}/0.jpg)`;

    trailer.addEventListener("click",()=>{
            episodeFromMovie.setAttribute("src",`https://www.youtube.com/embed/${src}`);
            modalContainer.appendChild(episodeFromMovie);

            fullPage.style.opacity = "0.5";

            modalContainer.removeAttribute("class");
            modalContainer.setAttribute("class","modalContainer");

            exitBtn.removeAttribute("class")
            exitBtn.setAttribute("class","exitBtn")
    });

    const stopBtnImg = document.createElement("img");
    stopBtnImg.setAttribute("src","images/videoIcon.svg")
    stopBtnImg.setAttribute("class","stopBtnImg");
    trailer.appendChild(stopBtnImg);

    return trailer
}

async function createTrailerContainer(title,cardCount){
    const onlyTrailerMovies = document.createElement("div");
    onlyTrailerMovies.setAttribute("class","onlyTrailerMovies");
    onlyTrailerMovies.setAttribute('id',"onlyTrailerMovies")
    let trailersLinks = await request(GET_MOVIE_VIDEOS(ID))

    if (trailersLinks.results.length>=4){
        const containerName = document.createElement("div");
        containerName.setAttribute("class","movieTrailers");
        containerName.innerText = title;
        trailers.appendChild(containerName)
    }

    for (let i = 0;i < cardCount;i++){
        onlyTrailerMovies.appendChild(createTrailerCard(trailersLinks.results[i].key))
    }
    trailers.appendChild(onlyTrailerMovies)
}

createTrailerContainer("Trailers",4)

const containerOfSimilarFilms = document.querySelector(".similarFilms");

function creatTitleForSimilarFilms (string){
    const title = document.createElement("div");
    title.setAttribute("class","similarFilmsTitle");
    title.innerText = string;
    containerOfSimilarFilms.appendChild(title)
}

creatTitleForSimilarFilms("Similar films")


function createACardForSimilarMovie (posterPath,title,year,rate,id) {
    const frameForCard = document.createElement("div");
    frameForCard.setAttribute("class","frameOfCardSimilarMovie");

    const poster = document.createElement("img");
    poster.setAttribute("class","similarMoviePoster");
    poster.style.background = `url(${posterPath})`
    frameForCard.appendChild(poster);

    poster.addEventListener("click",()=>{
        window.location.href = `index.html?&id=`+id;
    })
    const movieTitle = document.createElement("div");
    movieTitle.setAttribute("class","similarMovieCardTitle");
    movieTitle.innerText = title;
    frameForCard.appendChild(movieTitle);

    const similarMovieCardYearRating = document.createElement("div");
    similarMovieCardYearRating.setAttribute("class","similarMovieCardYearRating");

    const containerYearAndIcon = document.createElement("div");
    containerYearAndIcon.setAttribute("class","containerYearAndIcon")

    const filmYearIcon = document.createElement("img");
    filmYearIcon.setAttribute("class","similarMovieCardIcon");
    filmYearIcon.setAttribute("src","images/releaseDate.svg");
    containerYearAndIcon.appendChild(filmYearIcon);
    similarMovieCardYearRating.appendChild(containerYearAndIcon)

    const filmYearText = document.createElement("span");
    filmYearText.setAttribute("class","similarMovieCardText");
    filmYearText.innerText = year;
    containerYearAndIcon.appendChild(filmYearText)

    const containerForRatingAndIcon = document.createElement("div");
    containerForRatingAndIcon.setAttribute("class","containerYearAndIcon");

    const filmRateIcon = document.createElement("img");
    filmRateIcon.setAttribute("class","similarMovieCardIcon");
    filmRateIcon.setAttribute("src","images/rating.svg");
    containerForRatingAndIcon.appendChild(filmRateIcon);

    const filmRateText = document.createElement("span");
    filmRateText.setAttribute("class","similarMovieCardText");
    filmRateText.innerText = rate;
    containerForRatingAndIcon.appendChild(filmRateText)


    similarMovieCardYearRating.appendChild(containerForRatingAndIcon);

    frameForCard.appendChild(similarMovieCardYearRating)
    return frameForCard
}



async function createCardContainerForSimilarMoviesWithoutTitle (count){
    const onlySimilarMoviesWithoutTitle = document.createElement("div");
    onlySimilarMoviesWithoutTitle.setAttribute("class","onlySimilarMoviesWithoutTitle");
    let similarFilmInfo = await request(GET_SIMILAR_MOVIES(ID))
    for (let i = 0;i < count ;i++){
        let filReleaseYear = similarFilmInfo.results[i].release_date.slice(0,4)
        onlySimilarMoviesWithoutTitle.appendChild(createACardForSimilarMovie(GET_IMAGE(similarFilmInfo.results[i].poster_path),similarFilmInfo.results[i].title,filReleaseYear,similarFilmInfo.results[i].vote_average,similarFilmInfo.results[i].id))
    }
    containerOfSimilarFilms.appendChild(onlySimilarMoviesWithoutTitle)
}

createCardContainerForSimilarMoviesWithoutTitle(4);


// creating carousel slideshow


for (let i = 0; i < sliders.length ;i++){
    sliders[i].style.background = `url(${arrOfCarouselImagesLinks[i]})`
    sliders[i].setAttribute("data-index",`${i}`)
}

rightButton.addEventListener("click",() => {
    for (let j = 0;j < sliders.length ; j++){
        let num = parseInt(sliders[j].getAttribute("data-index"));
        ++num;
        if (num < arrOfCarouselImagesLinks.length ){
            sliders[j].style.background = `url(${arrOfCarouselImagesLinks[num]})`
            sliders[j].setAttribute("data-index",`${num}`)
        }else {
            num = 0;
            sliders[j].style.background = `url(${arrOfCarouselImagesLinks[num]})`;
            sliders[j].setAttribute("data-index",`${num}`)
        }
    }
})

leftButton.addEventListener("click",() => {
    for (let j = 0;j < sliders.length ; j++){
        let num = parseInt(sliders[j].getAttribute("data-index"));
        --num;
        if (num >= 0){
            sliders[j].style.background = `url(${arrOfCarouselImagesLinks[num]})`
            sliders[j].setAttribute("data-index",`${num}`)
        }else {
            num = arrOfCarouselImagesLinks.length - 1;
            sliders[j].style.background = `url(${arrOfCarouselImagesLinks[num]})`;
            sliders[j].setAttribute("data-index",`${num}`)
        }
    }
})


const searchInp = document.getElementById("searchInput")
let containerForFilmsList = document.createElement("div");

searchInp.addEventListener("input",async (evt)=>{
    searchIcon.addEventListener("click",()=>{
        window.location.href = `searchedFilmPage.html?&name=`+`${evt.target.value}`
    })
    try {
        containerForFilmsList.innerText = "";
        let filmsList = await request(GET_MOVIES(evt.target.value))

        if (evt.target.value.length === "0"){
            containerForFilmsList.removeAttribute("class")
            containerForFilmsList.setAttribute("class", "disabledFilmsList")
        }
        else{
            containerForFilmsList.removeAttribute("class")
            containerForFilmsList.setAttribute("class","containerForFilmsList");
        }


        for (let i = 0; i < 5;i++){
            if (filmsList.results[i].title){
                let aLinkOfFoundedFilm = document.createElement("a");
                aLinkOfFoundedFilm.setAttribute("class","aLinkOfFoundedFilm")
                aLinkOfFoundedFilm.innerText = filmsList.results[i].title;

                aLinkOfFoundedFilm.addEventListener("click",()=>{
                    window.location.href = `index.html?&id=` + `${filmsList.results[i].id}`
                })

                containerForFilmsList.appendChild(aLinkOfFoundedFilm);

            }else {
                break
            }
        }
        document.querySelector(".searchInputAndIcon").appendChild(containerForFilmsList);
    }catch (e) {
        containerForFilmsList.innerText = "";
        const nothingFoundText = document.createElement("span");
        nothingFoundText.setAttribute("class","aLinkOfFoundedFilm")

        nothingFoundText.innerText = "Nothing has been found";

        containerForFilmsList.appendChild(nothingFoundText)

        console.log(e)
    }

})

        window.addEventListener("click", ()=>{
            containerForFilmsList.removeAttribute("class");
            containerForFilmsList.setAttribute("class", "disabledFilmsList");
            document.querySelector(".containerForFilmsList").addEventListener("click",(e)=>{
                e.preventDefault()
            })
            searchInp.addEventListener("focus",(e)=>{
                e.preventDefault()
            })
        })

const modalContainer = document.querySelector("#modalContainer");
const exitBtn = document.querySelector("#exitBtn")
const episodeFromMovie = document.querySelector(".episodeFromMovie")

    exitBtn.addEventListener("click",(e)=>{
        modalContainer.removeAttribute("class");
        modalContainer.setAttribute("class","disabledModal");

        fullPage.style.opacity = "1";

        exitBtn.removeAttribute("class");
        exitBtn.setAttribute("class","disabledModal");

        episodeFromMovie.removeAttribute("src")
    })

