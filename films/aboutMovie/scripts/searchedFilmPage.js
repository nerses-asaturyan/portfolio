let params = new URLSearchParams(window.location.search)
let searchedMovie = params.get("name");


const foundedFilmsSector = document.querySelector(".foundedFilms")
const filmPages = document.querySelector(".pages")
async function filmInfoBySearchedName(name){
    let filmInfo = (await request(GET_MOVIES(name)))
    let films = filmInfo.results
    let numOfPages = Math.ceil((films.length)/12);
    if (numOfPages >= 2 ){
        for (let i = 0; i < numOfPages; i++){
            let eachPage = document.createElement("a");
            eachPage.setAttribute("class","eachPageLink");
            // eachPage.setAttribute("data-index",`${i+1}`);
            eachPage.innerText = `${i + 1}`;
            eachPage.addEventListener("click",async ()=>{
                films = filmInfo.results.slice(i*12,i*12+12);
                foundedFilmsSector.innerHTML = '';
                for (let j = 0 ;j < films.length ;j++) {
                    foundedFilmsSector.appendChild(await fuckingSameFunctionForCreatingCardFramePreviousDoesntWorkHere(films[j].poster_path, films[j].title, films[j].release_date, films[j].vote_average, films[j].id));
                }
                console.log(films)

            })
            filmPages.appendChild(eachPage)
        }
    }

        if (filmInfo.total_results === 0){
        const nothingHasFound = document.createElement("span");
        nothingHasFound.innerText = "Nothing has been found";
        nothingHasFound.setAttribute("class","nothingHasFound")
        foundedFilmsSector.appendChild(nothingHasFound);
    }

    for (let i = 0 ;i < 12 ;i++){
            if (films[i].poster_path && films[i].title && films[i].release_date && films[i].vote_average && films[i].id){
                document.title = `${films[0].title}`
                foundedFilmsSector.appendChild(await fuckingSameFunctionForCreatingCardFramePreviousDoesntWorkHere(films[i].poster_path, films[i].title, films[i].release_date, films[i].vote_average, films[i].id));
            }
        }

}

filmInfoBySearchedName(searchedMovie)


async function fuckingSameFunctionForCreatingCardFramePreviousDoesntWorkHere(posterPath,title,year,rate,id){
    const frameForCard = document.createElement("div")
    frameForCard.setAttribute("class","frameOfCardSimilarMovie additionalForCardFrame");

    const poster = document.createElement("img");
    poster.setAttribute("class","similarMoviePoster");
    poster.style.background = `url(https://image.tmdb.org/t/p/w500/${posterPath})`
    frameForCard.appendChild(poster);

    poster.addEventListener("click",()=>{
        window.location.href = `index.html?&id=`+id;
    })

    const filmTitle = document.createElement("div");
    filmTitle.setAttribute("class","similarMovieCardTitle");
    filmTitle.innerText = title;
    frameForCard.appendChild(filmTitle);

    const similarMovieCardYearRating = document.createElement("div");
    similarMovieCardYearRating.setAttribute("class","similarMovieCardYearRating");

    const containerYearAndIcon = document.createElement("div");
    containerYearAndIcon.setAttribute("class","containerYearAndIcon");

    const filmYearIcon = document.createElement("img");
    filmYearIcon.setAttribute("class","similarMovieCardIcon");
    filmYearIcon.setAttribute("src","images/releaseDate.svg");
    containerYearAndIcon.appendChild(filmYearIcon);
    similarMovieCardYearRating.appendChild(containerYearAndIcon);

    const filmYearText = document.createElement("span");
    filmYearText.setAttribute("class","similarMovieCardText");
    filmYearText.innerText = year.slice(0,4);
    containerYearAndIcon.appendChild(filmYearText);

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

const inputForSearch = document.querySelector(".searchInput");
const containerForSearch = document.querySelector(".searchInputAndIcon");
const sectorForFoundedFilms = document.createElement("div");

inputForSearch.addEventListener("input",async (evt)=>{
    try{
        sectorForFoundedFilms.innerText=''
        let res = await request(GET_MOVIES(evt.target.value));
        sectorForFoundedFilms.setAttribute("class","sectorForFoundedFilms");
        containerForSearch.appendChild(sectorForFoundedFilms);
        const resultFilteredSearchedFilm = res.results.filter((movie,i) =>{
            if (i<5) return movie
        })
        console.log(resultFilteredSearchedFilm)
        for (let i = 0; i < resultFilteredSearchedFilm.length ;i++ ){

            let forEachFoundedFilm = document.createElement("a");
            forEachFoundedFilm.innerText=''
            forEachFoundedFilm.setAttribute("class","aLinkOfFoundedFilm");
            forEachFoundedFilm.innerText = `${resultFilteredSearchedFilm[i].title}`;
            sectorForFoundedFilms.appendChild(forEachFoundedFilm);

            forEachFoundedFilm.addEventListener("click",()=>{
                if (window.location.href.includes('aboutMovie')){
                    window.location.href = `index.html?&id=`+`${resultFilteredSearchedFilm[i].id}`
                }
            })
        }

        if (resultFilteredSearchedFilm.length === 0 ){
            sectorForFoundedFilms.innerText=''
            let forEachFoundedFilm = document.createElement("a");
            forEachFoundedFilm.innerText=''
            forEachFoundedFilm.setAttribute("class","aLinkOfFoundedFilm");
            forEachFoundedFilm.innerText = `Nothing has been found`;
            sectorForFoundedFilms.appendChild(forEachFoundedFilm);
        }
    }catch (e) {
        console.log(e)
    }
})

window.addEventListener("click", ()=>{
    sectorForFoundedFilms.removeAttribute("class");
    sectorForFoundedFilms.setAttribute("class", "disabledFilmsList");
    containerForSearch.addEventListener("click",(e)=>{
        e.preventDefault()
    })
    inputForSearch.addEventListener("focus",(e)=>{
        e.preventDefault()
    })
})