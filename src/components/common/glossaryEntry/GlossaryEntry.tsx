import React, { FC } from 'react';
import './GlossaryEntry.css';

interface Props {
  term: string;
  definition: string | number;
}

const GlossaryEntry: FC<Props> = ({ term, definition }) => {
  return (
    <div className='glossary-entry'>
      <dt className='glossary-entry__term'>{term}</dt>
      <dd className='glossary-entry__def'>{definition}</dd>
    </div>
  );
};

export default GlossaryEntry;
