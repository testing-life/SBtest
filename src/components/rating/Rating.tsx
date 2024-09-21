import React, { FC } from 'react';
import './Rating.css';

interface Props {
  value: number;
}

const Rating: FC<Props> = ({ value }) => {
  return <span className='rating'>{value}</span>;
};

export default Rating;
