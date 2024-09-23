import Glossary from 'components/common/glossary/Glossary';
import GlossaryEntry from 'components/common/glossaryEntry/GlossaryEntry';
import Text from 'components/common/text/Text';
import React, { FC } from 'react';
import './FilmDetails.css';
import Details from 'components/common/details/Details';
import Pills from 'components/common/pills/Pills';
import './FilmDetails.css';
import { FilmItemDetails } from 'types/filmTypes';

interface Props {
  details: FilmItemDetails;
}

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
          <div className='-mb-24'>
            <Details content={description} title={`${title} description`} />
          </div>
          <embed className='film-details__embed -mb-24' src={trailer}></embed>
        </div>
      </div>
    </article>
  );
};

export default FilmDetails;
