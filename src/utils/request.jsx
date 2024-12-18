const API_KEY = "process.env.REACT_APP_ API_KEY";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APL_KEY}&with_network=212`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${APL_KEY}&languge=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APL_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APL_KEY}&with_genres=35`,
  fetchHorrerMovies: `/discover/movie?api_key=${APL_KEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${APL_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APL_KEY}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${APL_KEY}&language=en-US&page=1`,
};

export default requests;
