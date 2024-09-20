import React, { FC } from 'react';
import './Spinner.css';
import Text from 'components/common/text/Text';

interface Props {
  label?: string;
}

const Spinner: FC<Props> = ({ label }) => {
  return (
    <div className='spinner'>
      <span className='loader'></span>
      {label ? <Text classes='spinner__label' text={label} /> : null}
    </div>
  );
};

export default Spinner;
