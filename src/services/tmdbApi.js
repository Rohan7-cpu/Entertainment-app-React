import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );

  return response.data.results;
};

export const getTrendingTVSeries = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`
  );

  return response.data.results;
};
export const getPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  return response.data.results;
};
export const searchMulti = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`
  );

  return response.data.results;

};
export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );


  return response.data;
};
export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`
  );

  return response.data.results;
};
export const getMovieVideos = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
  );

  return response.data.results;
};