import axios from 'axios';
import { FilmItemDetails } from 'components/filmDetails/FilmDetails';
import {
  GET_FILMS_BY_RATING,
  GET_FILM_BY_TITLE,
  GET_FILM_DETAILS,
} from 'consts/apiUrl';
import {
  FilmByTitleResponse,
  FilmDetailsResponse,
  FilmsFetchHeaders,
  FilmsFetchResponse,
} from 'utils/fetchingUtils';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Film = {
  imdb_id: string;
  rating?: number;
  title: 'string';
};

type State = {
  films: Film[] | Pick<Film, 'imdb_id' | 'title'>[];
  filmDetails: FilmItemDetails | undefined;
  loading: boolean;
  error: string;
};

type Action = {
  fetchFilms: () => void;
  fetchFilmDetails: (imdbId: string) => void;
  fetchFilmsByTitle: (title: string) => void;
};

const useFilmsStore = create<State & Action>()(
  persist(
    (set) => ({
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
          set({ films: response.data.results });
        }
      },
      fetchFilmsByTitle: async (title: string) => {
        set({ loading: true, error: '' });
        const response = await axios
          .get<FilmByTitleResponse>(
            `${GET_FILM_BY_TITLE}${title.trim()}/`,
            FilmsFetchHeaders
          )
          .catch((error) => set({ error: error.message }))
          .finally(() => set({ loading: false }));
        if (response) {
          set({ films: response.data.results });
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
          set({ filmDetails: response.data.results });
        }
      },
    }),
    { name: 'films-storage' }
  )
);

export default useFilmsStore;
