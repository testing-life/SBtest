import React, { FC, ReactNode } from 'react';
import './Card.css';

interface Props {
  children: ReactNode;
}

const Card: FC<Props> = ({ children }) => {
  return <div className='card'>{children}</div>;
};

export default Card;
