const GET_MOVIES = (name) =>
  `${host}/search/movie?api_key=${api_key}&query=${name}`;
const GET_IMAGE = (background) =>
  `https://image.tmdb.org/t/p/w500${background}`;
const GET_MOVIE_DETAILS = (id) => `${host}/movie/${id}?api_key=${api_key}`;
const GET_MOVIE_VIDEOS = (id) =>
  `${host}/movie/${id}/videos?api_key=${api_key}`;
const GET_MOVIE_CREDITS = (id) =>
  `${host}/movie/${id}/credits?api_key=${api_key}`;
const GET_POPULAR_MOVIES = () =>
  `${host}/movie/popular?api_key=${api_key}&language=en-US&page=1`;
const GET_MOST_RATED_MOVIES = () =>
  `${host}/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
const GET_SIMILAR_MOVIES = (id) => `${host}/movie/${id}/similar?api_key=${api_key}&language=en-US&page=1`;




