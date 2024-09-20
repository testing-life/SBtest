import axios from 'axios';
import { FilmItemDetails } from 'components/filmDetails/FilmDetails';
import {
  GET_FILMS_BY_RATING,
  GET_FILM_BY_TITLE,
  GET_FILM_DETAILS,
} from 'consts/apiUrl';
import {
  FilmDetailsResponse,
  FilmsFetchHeaders,
  FilmsFetchResponse,
} from 'utils/fetchingUtils';
import { create } from 'zustand';

export type Film = {
  imdb_id: string;
  rating: number;
  title: 'string';
};

type State = {
  films: Film[];
  filmDetails: FilmItemDetails | undefined;
  loading: boolean;
  error: string;
};

type Action = {
  fetchFilms: () => void;
  fetchFilmDetails: (imdbId: string) => void;
  fetchFilmsByTitle: (title: string) => void;
};

const useFilmsStore = create<State & Action>((set) => ({
  films: [],
  loading: false,
  error: '',
  filmDetails: undefined,
  fetchFilms: async () => {
    set({ loading: true, error: '' });
    const response = await axios
      .get<FilmsFetchResponse>(GET_FILMS_BY_RATING, FilmsFetchHeaders)
      .catch((error) => set({ error: error.message }))
      .finally(() => set({ loading: false }));
    if (response) {
      set({ films: response.data.results, loading: false });
    }
  },
  fetchFilmsByTitle: async (title: string) => {
    set({ loading: true, error: '' });
    const response = await axios
      .get<FilmsFetchResponse>(
        `${GET_FILM_BY_TITLE}${title}/`,
        FilmsFetchHeaders
      )
      .catch((error) => set({ error: error.message }))
      .finally(() => set({ loading: false }));
    if (response) {
      set({ films: response.data.results, loading: false });
    }
  },
  fetchFilmDetails: async (imdbId: string) => {
    set({ loading: true, error: '' });
    const response = await axios
      .get<FilmDetailsResponse>(
        `${GET_FILM_DETAILS}${imdbId}`,
        FilmsFetchHeaders
      )
      .catch((error) => set({ error: error.message }))
      .finally(() => set({ loading: false }));
    if (response) {
      set({ filmDetails: response.data.results, loading: false });
    }
  },
}));

export default useFilmsStore;
