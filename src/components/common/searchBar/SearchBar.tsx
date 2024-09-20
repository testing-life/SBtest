import React, { FC, FormEvent, useState } from 'react';
import FormLayout from '../formLayout/FormLayout';
import Input from '../input/Input';
import Button from '../button/Button';

interface Props {
  onSubmit: (term: string) => void;
}

const SearchBar: FC<Props> = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const clearInput = () => {
    if (!term) {
      return;
    }
    setTerm('');
    onSubmit('');
  };

  return (
    <FormLayout
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(term);
      }}
    >
      <>
        <Input
          label='Search by title'
          id='title'
          hasClearButton
          onClear={clearInput}
          value={term}
          onChange={(value: string) => setTerm(value)}
        />
        <Button type='submit'>Search</Button>
      </>
    </FormLayout>
  );
};

export default SearchBar;
