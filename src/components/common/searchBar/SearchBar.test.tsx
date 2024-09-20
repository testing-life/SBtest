import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from 'components/common/searchBar/SearchBar';

describe('SearchBar Component', () => {
  let onSubmitMock: jest.Mock;

  beforeEach(() => {
    onSubmitMock = jest.fn();
  });

  it('should render input and button correctly', () => {
    render(<SearchBar onSubmit={onSubmitMock} />);

    const input = screen.getByLabelText('Search by title');
    expect(input).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Search' });
    expect(button).toBeInTheDocument();
  });

  it('should update input value when typing', () => {
    render(<SearchBar onSubmit={onSubmitMock} />);

    const input = screen.getByLabelText('Search by title');

    fireEvent.change(input, {
      target: { value: 'How I started the Second World War' },
    });

    expect(input).toHaveValue('How I started the Second World War');
  });

  it('should call onSubmit with the input value when the form is submitted', () => {
    render(<SearchBar onSubmit={onSubmitMock} />);

    const input = screen.getByLabelText('Search by title');
    const button = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(input, {
      target: { value: 'How I started the Second World War' },
    });

    fireEvent.click(button);

    expect(onSubmitMock).toHaveBeenCalledWith(
      'How I started the Second World War'
    );
  });
});
