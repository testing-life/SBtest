import Card from 'components/common/card/Card';
import Spinner from 'components/common/spinner/Spinner';
import Film from 'components/film/Film';
import Text from 'components/common/text/Text';
import React, { useEffect, useMemo } from 'react';
import useFilmsStore from 'stores/film.store';
import './Films.css';
import { hasTruthyProperties } from 'utils/object';

const Films = () => {
  const { filter, films, loading, error, fetchFilms } = useFilmsStore();

  const memoisedFilter = useMemo(() => filter, [JSON.stringify(filter)]);

  useEffect(() => {
    if (!films?.length && !hasTruthyProperties<typeof filter>(memoisedFilter)) {
      fetchFilms();
    }
  }, [films.length, fetchFilms, memoisedFilter]);

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
