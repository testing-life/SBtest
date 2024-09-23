import { API_URL_HOST } from 'consts/apiUrl';

export const FilmsFetchHeaders = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': API_URL_HOST,
  },
};
