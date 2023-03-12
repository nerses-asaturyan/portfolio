const main = document.querySelector("main");
const headerPosters = document.querySelector(".header-posters-container");


const searchInput = document.getElementById("searchInput");
const searchIcon = document.querySelector(".searchIcon")
const containerSearchedFilms = document.querySelector(
  "#containerSearchedFilms"
);

// searching films


searchInput.addEventListener("input", async (evt) => {

  searchIcon.addEventListener("click",()=>{
    if (window.location.href.includes('aboutMovie')) {
      window.location.href = `searchedFilmPage.html?&name=`+`${evt.target.value}`
    }else {
      window.location.href = `aboutMovie/searchedFilmPage.html?&name=`+`${evt.target.value}`

    }
  })

  containerSearchedFilms.innerText = "";
  containerSearchedFilms.setAttribute("class", "containerSearchedFilmsActive");
  try {
    if (evt.target.value.length === "0") {
      containerSearchedFilms.innerHTML = "";
      containerSearchedFilms.classList.remove("containerSearchedFilmsActive");
    }
    const rsp = await request(GET_MOVIES(evt.target.value));
    const searchedFilms = document.createElement("div");
    searchedFilms.setAttribute("class", "searchedFilms");


    for (let i = 0; i < 5; i++) {

      if (rsp.results[i].original_title) {
        const foundedFilm = document.createElement("div");
        const linkOfSearchedFilm = document.createElement("a");

        foundedFilm.setAttribute("class", "searchedFilms");
        linkOfSearchedFilm.setAttribute("class", "linkOfSearchedFilm");

        linkOfSearchedFilm.innerText = `${rsp.results[i].original_title}`;

        foundedFilm.appendChild(linkOfSearchedFilm)
        containerSearchedFilms.appendChild(foundedFilm);

        linkOfSearchedFilm.addEventListener("click",()=>{
          window.location.href = `${routingFilmCredits(rsp.results[i].id)}`
        })

      } else {
        break;
      }
    }
  } catch (err) {
    containerSearchedFilms.innerHTML = "";
    const foundedFilm = document.createElement("div");
    const linkOfSearchedFilm = document.createElement("span");

    foundedFilm.setAttribute("class", "searchedFilms");
    linkOfSearchedFilm.setAttribute("class", "linkOfSearchedFilm");

    linkOfSearchedFilm.innerText = "Nothing has been found";

    foundedFilm.appendChild(linkOfSearchedFilm)
    containerSearchedFilms.appendChild(foundedFilm);
    console.log(err);
  }
});

window.addEventListener("click", ()=>{
  containerSearchedFilms.innerText = "";
  containerSearchedFilms.removeAttribute("class");
  containerSearchedFilms.setAttribute("class", "disabledFilmsList");
  document.querySelector(".containerForFilmsList").addEventListener("click",(e)=>{
    e.preventDefault()
  })
  searchInp.addEventListener("focus",(e)=>{
    e.preventDefault()
  })
})


const watchNowButton = document.createElement("button");
async function randomFilmPoster() {
  const bigPoster = document.createElement("div");
  bigPoster.setAttribute("class", "bigPoster");
  bigPoster.setAttribute("id", "bigPoster");

  const filmInfo = (await getLastPopularMoviePoster());
  if (filmInfo[0]) {
    bigPoster.style.background = `url(${filmInfo[0]})`
  }
  watchNowButton.setAttribute("class", "watchNowButton");
  watchNowButton.innerText = "Watch now";
  watchNowButton.addEventListener("click",()=>{
    window.location.href = `${routingFilmCredits(filmInfo[1])}`
  })

  bigPoster.appendChild(watchNowButton);
  headerPosters.appendChild(bigPoster);
}

randomFilmPoster();


async function createSmallPosterHeader (numOfIndexInImageArr) {
  const smallPoster = document.createElement("div");
  smallPoster.setAttribute("class", "smallPoster");
  let imageInfo = (await getLastMostRatedMovie())
  smallPoster.addEventListener("click",()=>{
    window.location.href = `${routingFilmCredits(imageInfo[numOfIndexInImageArr][1])
    }`
  })
  const image = GET_IMAGE(imageInfo[numOfIndexInImageArr][0])
  if (image){
    smallPoster.style.background = `url(${image})`
  }
  headerPosters.appendChild(smallPoster);
}

createSmallPosterHeader(0);
createSmallPosterHeader(1);

const popularFilms = document.createElement("div");
popularFilms.setAttribute("class", "mainPart");

// title for each main part

const titleForEachMainPart = (text) => {
  const title = document.createElement("div");
  title.setAttribute("class", "title");
  title.innerText = text;
  return title;
};

const filmCard = (background,title,year,rating) => {
  const frameOfCard = document.createElement("div");
  frameOfCard.setAttribute("class", "frameOfCard");

  const posterForFilmCard = document.createElement("div");
  posterForFilmCard.setAttribute("class", "posterForFilmCard");
  posterForFilmCard.style.background = `url(${background})`;
  frameOfCard.appendChild(posterForFilmCard);

  const cardTitle = document.createElement("div");
  cardTitle.setAttribute("class", "filmCardTitle");
  cardTitle.innerText = title;
  frameOfCard.appendChild(cardTitle);

  const containerForFilmYearAndRating = document.createElement("div");
  containerForFilmYearAndRating.setAttribute(
    "class",
    "containerForFilmYearAndRating"
  );
  frameOfCard.appendChild(containerForFilmYearAndRating);

  const containerForIconAndFilmYear = document.createElement("div");
  containerForIconAndFilmYear.setAttribute(
    "class",
    "containerForIconAndFilmYear"
  );
  containerForFilmYearAndRating.appendChild(containerForIconAndFilmYear);

  const filmYearIcon = document.createElement("div");
  filmYearIcon.setAttribute("class", "filmYearIcon");
  containerForIconAndFilmYear.appendChild(filmYearIcon);

  const filmYear = document.createElement("img");
  filmYear.setAttribute("src", "img/time.svg");
  filmYear.setAttribute("class", "filmYear");
  containerForIconAndFilmYear.appendChild(filmYear);

  const yearOfFilm = document.createElement("span");
  yearOfFilm.setAttribute("class", "yearOfFilm");
  yearOfFilm.innerText = year;
  containerForIconAndFilmYear.appendChild(yearOfFilm);

  const containerForRatingIconAndRate = document.createElement("div");
  containerForRatingIconAndRate.setAttribute(
    "class",
    "containerForIconAndFilmYear"
  );
  containerForFilmYearAndRating.appendChild(containerForRatingIconAndRate);

  const filmRateIcon = document.createElement("div");
  filmRateIcon.setAttribute("class", "filmRateIcon");
  containerForRatingIconAndRate.appendChild(filmRateIcon);

  const rateIcon = document.createElement("img");
  rateIcon.setAttribute("src", "img/rate.svg");
  rateIcon.setAttribute("class", "filmYear");
  containerForRatingIconAndRate.appendChild(rateIcon);

  const filmRating = document.createElement("span");
  filmRating.setAttribute("class", "filmRating");
  filmRating.innerText = rating;
  containerForRatingIconAndRate.appendChild(filmRating);

  return frameOfCard;
};

async function filmCardContainer(title, type) {
  const container = document.createElement("div");
  container.setAttribute("class", "sectionContainer");
  container.appendChild(titleForEachMainPart(title));

  const filmContainer = document.createElement("div");
  filmContainer.setAttribute("class", "filmContainer");


  const films = (await getMovies(type)).results;

  for (let i = 0; i < 4; i++) {
    const { poster_path, original_title, release_date, vote_average } = films[i]
    let movie = filmCard(
        GET_IMAGE(poster_path),
        original_title,
        release_date,
        vote_average,
    );
    movie.addEventListener("click",()=>{
      window.location.href =  `${routingFilmCredits(films[i].id)}`
      })
    filmContainer.appendChild(movie);
  }
  container.appendChild(filmContainer);

  main.appendChild(container);
}

async function getMovies(type) {
  try {
    return await request(type === "popular" ? GET_POPULAR_MOVIES() : GET_MOST_RATED_MOVIES());
  } catch (err) {
    console.error(err);
  }
}

filmCardContainer("Most popular films", "popular");
filmCardContainer("Most rated films", "rated");


async function getLastPopularMoviePoster(){
  const randomNumber = Math.round(Math.random() * 19);
  try{
    const film = (await request(GET_POPULAR_MOVIES())).results[randomNumber];
    return [GET_IMAGE(film.backdrop_path),film.id]
  }catch (err){
    console.error(err)
  }
}

async function getLastMostRatedMovie(){
  try{
    let arrOfRandNumbers = []
    const films = (await request(GET_MOST_RATED_MOVIES())).results;
      while(arrOfRandNumbers.length <= 2) {
        const randomNumber = Math.round(Math.random() * 19);
        if (!arrOfRandNumbers.includes(randomNumber)) {
          arrOfRandNumbers.push(randomNumber);
        }
        if (arrOfRandNumbers.length === 2) break
      }
    arrOfRandNumbers = arrOfRandNumbers.map(el=>{
        return [films[el].poster_path,films[el].id];
      });
      return arrOfRandNumbers
    } catch (err){
      console.log(err)
    }
}

function routingFilmCredits (id) {
  return `aboutMovie/index.html?&id=`+`${id}`
}

document.addEventListener("keypress",(evt)=>{
  if (evt.keyCode === 13){
    if (window.location.href.includes('aboutMovie')) {
      window.location.href = `searchedFilmPage.html?&name=`+`${evt.target.value}`
    }else {
      window.location.href = `aboutMovie/searchedFilmPage.html?&name=`+`${evt.target.value}`
    }
  }
})


const logo = document.querySelector("header img");

logo.addEventListener("click",()=>{
  window.location.href = `/index.html/`
})

