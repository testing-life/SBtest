import FilmDetails from 'components/filmDetails/FilmDetails';
import Spinner from 'components/common/spinner/Spinner';
import { HOME } from 'consts/routes';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFilmsStore from 'stores/film.store';
import Text from 'components/common/text/Text';
import { FilmItemDetails } from 'types/filmTypes';

const DetailsPage = () => {
  const {
    state: { imdbId },
  } = useLocation();
  const { filmDetails, loading, error, fetchFilmDetails } = useFilmsStore();

  useEffect(() => {
    if (imdbId && filmDetails?.imdb_id !== imdbId) {
      fetchFilmDetails(imdbId);
    }
  }, [imdbId, filmDetails?.imdb_id, fetchFilmDetails]);

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
