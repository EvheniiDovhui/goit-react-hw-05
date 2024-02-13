import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// const API_KEY = 'e8cda26a224793187e20315f88663066';
axios.defaults.language = 'en-US';
axios.defaults.headers.accept = 'application/json';
axios.defaults.headers.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGNkYTI2YTIyNDc5MzE4N2UyMDMxNWY4ODY2MzA2NiIsInN1YiI6IjY1YzkwMmEyM2MzYWIwMDE4NGNlZTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vyvpfk-aJH19FfQOceTTPUTHoKsQ5XRH3f02iYtpF4Q';

export const getMovies = async ({ abortController }) => {
  const response = await axios.get(`/trending/movie/day`, {
    signal: abortController.signal,
  });
  return response.data;
};

export const getMoviesId = async moviesId => {
  const response = await axios.get(`/movie/${moviesId}`);
  return response.data;
};

export const getMoviesCast = async moviesId => {
  const response = await axios.get(`/movie/${moviesId}/credits`);
  return response.data.cast;
};

export const getMoviesReviews = async moviesId => {
  const response = await axios.get(`/movie/${moviesId}/reviews?page=1&`);
  return response.data.results;
};

export const getSearchMovie = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}?&include_adult=false&page=1`
  );
  return response.data.results;
};
