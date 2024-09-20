import React, { FC } from 'react';
import './Text.css';

type Props = {
  styleAs?: 'h1' | 'h2' | 'h3';
  renderAs?: 'h1' | 'h2' | 'h3' | 'error';
  text: string;
  classes?: string;
};

const Text: FC<Props> = ({ styleAs, renderAs, text, classes }) => {
  const renderElement = () => {
    switch (renderAs) {
      case 'h1':
        return <h1 className={styleAs ? `${styleAs}` : ''}>{text}</h1>;
      case 'h2':
        return <h2 className={styleAs ? `${styleAs}` : ''}>{text}</h2>;
      case 'h3':
        return <h3 className={styleAs ? `${styleAs}` : ''}>{text}</h3>;
      case 'error':
        return (
          <p className={`para -is-error' ${classes ? classes : ''}`}>{text}</p>
        );
      default:
        return <p className={`para ${classes ? classes : ''}`}>{text}</p>;
    }
  };
  return <>{renderElement()}</>;
};

export default Text;
