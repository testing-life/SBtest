import FilmDetails, {
  FilmItemDetails,
} from 'components/filmDetails/FilmDetails';
import Spinner from 'components/common/spinner/Spinner';
import { HOME } from 'consts/routes';
import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFilmsStore from 'stores/film.store';
import Text from 'components/common/text/Text';

const DetailsPage = () => {
  const {
    state: { imdbId },
  } = useLocation();
  const { filmDetails, loading, error, fetchFilmDetails } = useFilmsStore();

  const memoisedFetchFilmDetails = useCallback(fetchFilmDetails, [
    fetchFilmDetails,
  ]);

  useEffect(() => {
    if (imdbId && filmDetails?.imdb_id !== imdbId) {
      memoisedFetchFilmDetails(imdbId);
    }
  }, [imdbId, filmDetails?.imdb_id, memoisedFetchFilmDetails]);

  return (
    <section className='page'>
      <header>
        <Link to={HOME}>Home</Link>
      </header>
      {!loading && filmDetails && (
        <FilmDetails
          details={
            filmDetails as Pick<typeof filmDetails, keyof FilmItemDetails>
          }
        />
      )}
      {loading && !error && <Spinner label='Loading film details' />}
      {error && <Text renderAs='error' text={error} />}
    </section>
  );
};

export default DetailsPage;
