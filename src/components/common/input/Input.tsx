import React, { ChangeEvent, FC, useState } from 'react';
import './Input.css';
import Button from 'components/common/button/Button';
import Text from 'components/common/text/Text';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

interface Props {
  required?: boolean;
  id: string;
  placeholder?: string;
  label: string;
  name?: string;
  hasClearButton?: boolean;
  value: any;
  type?: 'text' | 'email' | 'password';
  onChange: (e: string) => void;
  onClear?: () => void;
}

const Input: FC<Props> = ({
  required,
  id,
  label,
  value,
  name,
  hasClearButton,
  type = 'text',
  onChange,
  onClear,
}) => {
  const [error, setError] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (required && e.target.validationMessage) {
      setError(e.target.validationMessage);
    } else {
      setError('');
    }
  };

  return (
    <div
      className={`input-wrapper ${hasClearButton ? '-has-clear-button' : ''}`}
    >
      <label className='invisible' htmlFor={id}>
        {label}
      </label>
      <input
        required={required}
        id={id}
        name={name}
        type={type}
        placeholder={label}
        value={value}
        onBlur={blurHandler}
        onChange={changeHandler}
      />
      {hasClearButton && value && (
        <Button variant='icon' ariaLabel='clear' clickHandler={onClear}>
          <CloseIcon />
        </Button>
      )}
      {error ? <Text renderAs='error' text={error} /> : null}
    </div>
  );
};

export default Input;
