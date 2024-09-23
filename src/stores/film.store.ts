import axios from 'axios';
import { FilmItemDetails } from 'types/filmTypes';
import {
  GET_FILMS_BY_RATING,
  GET_FILM_BY_TITLE,
  GET_FILM_DETAILS,
} from 'consts/apiUrl';
import { Film } from 'types/filmTypes';
import {
  FilmByTitleResponse,
  FilmDetailsResponse,
  FilmsFetchResponse,
} from 'types/filmTypes';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FilmsFetchHeaders } from 'consts/requestConfig';

type State = {
  films: Film[] | Pick<Film, 'imdb_id' | 'title'>[];
  filmDetails: FilmItemDetails | undefined;
  loading: boolean;
  error: string;
  filter: {
    title: string;
  };
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
      filter: { title: '' },
      fetchFilms: async () => {
        set({ loading: true, error: '', filter: { title: '' } });
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
          set({ films: response.data.results, filter: { title } });
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
