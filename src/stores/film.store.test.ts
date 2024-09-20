import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { waitFor } from '@testing-library/react';
import axios from 'axios';
import useFilmsStore from './film.store';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useFilmsStore', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useFilmsStore.getState());
    act(() => (result.current.films = []));
    act(() => (result.current.loading = false));
    act(() => (result.current.error = ''));
    act(() => (result.current.filmDetails = undefined));
  });

  it('should initialize with the correct default state', () => {
    const { result } = renderHook(() => useFilmsStore());

    expect(result.current.films).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe('');
    expect(result.current.filmDetails).toBeUndefined();
  });

  it('should set loading state to true when fetching films', async () => {
    const filmsMock = [{ imdb_id: 'tt123', rating: 8.5, title: 'Film Title' }];

    mockedAxios.get.mockResolvedValueOnce({
      data: { results: filmsMock },
    });

    const { result } = renderHook(() => useFilmsStore());

    act(() => {
      result.current.fetchFilms();
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));
  });

  it('should update the films array after a successful fetchFilms call', async () => {
    const filmsMock = [{ imdb_id: 'tt123', rating: 8.5, title: 'Film Title' }];

    mockedAxios.get.mockResolvedValueOnce({
      data: { results: filmsMock },
    });

    const { result } = renderHook(() => useFilmsStore());

    act(() => {
      result.current.fetchFilms();
    });

    await waitFor(() => expect(result.current.films).toEqual(filmsMock));
  });

  it('should handle errors when fetchFilms fails', async () => {
    const filmsMock = [{ imdb_id: 'tt123', rating: 8.5, title: 'Film Title' }];

    mockedAxios.get.mockResolvedValueOnce({
      data: { results: filmsMock },
    });

    const { result } = renderHook(() => useFilmsStore());

    act(() => {
      result.current.fetchFilms();
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));
  });

  it('should fetch film details and update filmDetails state', async () => {
    const filmDetailsMock = {
      imdb_id: 'tt123',
      rating: 8.5,
      title: 'Film Title',
    };

    mockedAxios.get.mockResolvedValueOnce({
      data: { results: filmDetailsMock },
    });

    const { result } = renderHook(() => useFilmsStore());

    act(() => {
      result.current.fetchFilmDetails('tt123');
    });

    await waitFor(() =>
      expect(result.current.filmDetails).toEqual(filmDetailsMock)
    );
  });
});
