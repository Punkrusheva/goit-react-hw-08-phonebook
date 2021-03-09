import Axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const KEY = '892c9b9f1c704261a0f515abd746d990';
 
const showTrending = () => {
    return Axios.get(`${baseURL}/trending/movie/day?api_key=${KEY}`)
};

const showMovieDetails = (movieId) => {
   return Axios.get(`${baseURL}/movie/${movieId}?api_key=${KEY}`);
}

const showCast = (movieId) => {
  return Axios.get(`${baseURL}/movie/${movieId}/credits?api_key=${KEY}`);
}

const showReviews = (movieId) => {
  return Axios.get(`${baseURL}/movie/${movieId}/reviews?api_key=${KEY}`);
}
const showWithQuery = (query) => {
  return Axios.get(`${baseURL}/search/movie?api_key=${KEY}&query=${query}`);
};

export default { showTrending, showMovieDetails, showCast, showReviews, showWithQuery };
