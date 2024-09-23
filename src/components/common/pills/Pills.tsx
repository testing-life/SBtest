import { Genre } from 'types/filmTypes';
import Pill from 'components/common/pill/Pill';
import React, { FC } from 'react';
import './Pills.css';

interface Props {
  labels: Genre[];
}

const Pills: FC<Props> = ({ labels }) => {
  return labels.length ? (
    <ul className='pills'>
      {labels.map((label) => (
        <li className='pills__item' key={label.id}>
          <Pill label={label.genre} />
        </li>
      ))}
    </ul>
  ) : null;
};

export default Pills;
