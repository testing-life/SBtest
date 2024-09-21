import Text from 'components/common/text/Text';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Film.css';
import { DETAILS } from 'consts/routes';
import Rating from 'components/rating/Rating';
import { Film as IFilm } from 'stores/film.store';

interface Props {
  film: IFilm;
}

const Film: FC<Props> = ({ film: { title, rating, imdb_id } }) => {
  return (
    <article className='film'>
      <header className='film__header'>
        <Text renderAs='h2' text={title} />
      </header>

      {rating && (
        <span className='film__rating'>
          <Text text={'Rating:'} />
          <Rating value={rating} />
        </span>
      )}

      <Link to={DETAILS} state={{ imdbId: imdb_id }}>
        More about {title}
      </Link>
    </article>
  );
};

export default Film;
