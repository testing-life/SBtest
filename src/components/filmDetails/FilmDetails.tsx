import Glossary from 'components/common/glossary/Glossary';
import GlossaryEntry from 'components/common/glossaryEntry/GlossaryEntry';
import Text from 'components/common/text/Text';
import React, { FC } from 'react';
import './FilmDetails.css';
import Details from 'components/common/details/Details';
import Pills from 'components/common/pills/Pills';
import './FilmDetails.css';

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

export type Props = {
  details: FilmItemDetails;
};

const FilmDetails: FC<Props> = ({ details }) => {
  const { title, rating, year, image_url, description, trailer, plot, gen } =
    details;
  return (
    <article className='film-details'>
      <Text renderAs='h1' text={title} />
      <div className='film-details__meta -mb-24'>
        <div>
          <img className='film-details__meta-image' src={image_url} alt='' />
        </div>
        <div>
          <div className='-mb-24'>
            <Pills labels={gen} />
          </div>
          <div className='-mb-24'>
            <Glossary>
              <GlossaryEntry term='Released' definition={year} />
              <GlossaryEntry term='Rating' definition={rating} />
              <GlossaryEntry term='Plot' definition={plot} />
            </Glossary>
          </div>
          <a target='_blank' href={trailer} rel='noreferrer'>
            Watch {title} trailer on YouTube
          </a>
          <Details content={description} title={`${title} description`} />
        </div>
      </div>
    </article>
  );
};

export default FilmDetails;
