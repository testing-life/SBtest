import Card from 'components/common/card/Card';
import Spinner from 'components/common/spinner/Spinner';
import Film from 'components/film/Film';
import Text from 'components/common/text/Text';
import React, { useCallback, useEffect } from 'react';
import useFilmsStore from 'stores/film.store';
import './Films.css';

const Films = () => {
  const { films, loading, error, fetchFilms } = useFilmsStore();

  const memoisedFetchFilms = useCallback(fetchFilms, [fetchFilms]);

  useEffect(() => {
    if (!films.length) {
      memoisedFetchFilms();
    }
  }, [films.length, memoisedFetchFilms]);

  return (
    <>
      {loading && <Spinner label='Loading' />}
      {!loading && films.length ? (
        <ul className='films__cards'>
          {films?.map?.((film) => (
            <li key={film.imdb_id}>
              <Card>
                <Film film={film} />
              </Card>
            </li>
          ))}
        </ul>
      ) : null}
      {!loading && !films.length && <Text text='No films found' />}
      {error && <Text renderAs='error' text={error} />}
    </>
  );
};

export default Films;
