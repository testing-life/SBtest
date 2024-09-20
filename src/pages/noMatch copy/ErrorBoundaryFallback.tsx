import React, { FC } from 'react';
import Text from 'components/common/text/Text';
import { HOME } from 'consts/routes';

interface Props {
  error: Error;
}

const ErrorBoundaryFallback: FC<Props> = ({ error }) => {
  return (
    <section className='page'>
      <Text renderAs='h1' classes='-mb-24' text={'An problem has occured'} />
      <Text classes='-mb-24' renderAs='error' text={error.message} />
      <Text classes='-mb-24' text={'Please refresh your browser window'} />
    </section>
  );
};

export default ErrorBoundaryFallback;
