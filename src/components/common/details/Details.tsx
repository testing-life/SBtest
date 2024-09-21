import React, { FC } from 'react';
import './Details.css';
import Text from 'components/common/text/Text';

interface Props {
  title: string;
  content: string;
}

const Details: FC<Props> = ({ title, content }) => {
  return (
    <details className='details'>
      <summary className='details__summary'>{title}</summary>
      <Text text={content} classes='details__content' />
    </details>
  );
};

export default Details;
