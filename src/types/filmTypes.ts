export type Film = {
  imdb_id: string;
  rating?: number;
  title: 'string';
};

export type Genre = { id: number; genre: string };

export type FilmItemDetails = {
  imdb_id: string;
  title: string;
  rating: number;
  year: string;
  image_url: string;
  description: string;
  plot: string;
  gen: Genre[];
  trailer: string;
};

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
