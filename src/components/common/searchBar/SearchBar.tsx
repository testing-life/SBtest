import React, { FC, FormEvent, useState } from 'react';
import FormLayout from '../formLayout/FormLayout';
import Input from '../input/Input';
import Button from '../button/Button';
import useFilmsStore from 'stores/film.store';

interface Props {
  onSubmit: (term: string) => void;
}

const SearchBar: FC<Props> = ({ onSubmit }) => {
  const {
    filter: { title },
  } = useFilmsStore();
  const [term, setTerm] = useState(title || '');

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
        if (term) {
          onSubmit(term);
        }
      }}
    >
      <>
        <Input
          label='Search by title'
          id='title'
          hasClearButton
          onClear={clearInput}
          value={term}
          onChange={setTerm}
        />
        <Button disabled={!term} type='submit'>
          Search
        </Button>
      </>
    </FormLayout>
  );
};

export default SearchBar;
