import Text from 'components/common/text/Text';
import { HOME } from 'consts/routes';

const NoMatchPage = () => {
  return (
    <section className='page'>
      <Text renderAs='h1' classes='-mb-24' text={'Are we lost ?'} />
      <Text
        classes='-mb-24'
        text={"The page you have been looking for doesn't exist"}
      />
      <a href={HOME} rel='noreferrer'>
        Home
      </a>
    </section>
  );
};

export default NoMatchPage;
