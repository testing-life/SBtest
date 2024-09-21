import React, { FC, ReactNode } from 'react';
import './Button.css';

interface Props {
  children: ReactNode;
  fullWidth?: boolean;
  classes?: string;
  disabled?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: undefined | 'icon';
  clickHandler?: () => void;
}

const Button: FC<Props> = ({
  children,
  fullWidth,
  type = 'button',
  clickHandler,
  variant,
  ariaLabel,
  disabled,
  classes = '',
}) => {
  return (
    <button
      onClick={clickHandler}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`btn ${classes ? classes : ''} ${
        fullWidth ? '-full-width' : ''
      }  ${variant ? `-is-${variant}` : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
