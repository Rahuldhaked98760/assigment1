import axios from 'axios';

const API_KEY = '4e44d9029b1270a757cddc766a1bcb63';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchUpcomingMovies = async (page = 1) => {
  const res = await axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page,
    },
  });
  return res.data;
};
