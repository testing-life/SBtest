import Text from 'components/common/text/Text';
import useFilmsStore from 'stores/film.store';
import SearchBar from 'components/common/searchBar/SearchBar';
import Films from 'components/films/Films';

const HomePage = () => {
  const {
    filter: { title },
    fetchFilms,
    fetchFilmsByTitle,
  } = useFilmsStore();

  const submitHandler = (term: string) => {
    if (term.length) {
      fetchFilmsByTitle(term);
    } else {
      fetchFilms();
    }
  };

  return (
    <section className='page'>
      <Text
        renderAs='h1'
        text={`Films By ${title ? 'Title ' : 'IMDB rating'}`}
      />
      <div className='-mb-24'>
        <SearchBar onSubmit={submitHandler} />
      </div>
      <Films />
    </section>
  );
};

export default HomePage;
