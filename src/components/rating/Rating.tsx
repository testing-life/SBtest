import React, { FC } from 'react';
import './Rating.css';

type Props = {
  value: number;
};

const Rating: FC<Props> = ({ value }) => {
  return <span className='rating'>{value}</span>;
};

export default Rating;
