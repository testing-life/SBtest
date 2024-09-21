import { FilmItemDetails } from 'components/filmDetails/FilmDetails';
import { API_URL_HOST } from 'consts/apiUrl';
import { Film } from 'stores/film.store';

export interface FilmsFetchResponse {
  links: {};
  count: number;
  results: Film[];
}

export interface FilmDetailsResponse {
  results: FilmItemDetails;
}

export interface FilmByTitleResponse {
  results: Pick<Film, 'imdb_id' | 'title'>[];
}

export const FilmsFetchHeaders = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': API_URL_HOST,
  },
};
