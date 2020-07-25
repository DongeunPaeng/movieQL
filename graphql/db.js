import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";
const GET_MOVIE_URL = "https://yts.mx/api/v2/movie_details.json?";
const GET_SUGGESTION_URL = "https://yts.mx/api/v2/movie_suggestions.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

export const getMovie = (id) => {
  let REQUEST_URL = GET_MOVIE_URL;
  if (id > 0) {
    REQUEST_URL += `movie_id=${id}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movie);
};

export const getSuggestions = (id) => {
  let REQUEST_URL = GET_SUGGESTION_URL;
  if (id > 0) {
    REQUEST_URL += `movie_id=${id}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
