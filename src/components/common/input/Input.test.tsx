import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
describe('Input Component', () => {
  let onChangeMock: jest.Mock;
  let onClearMock: jest.Mock;

  beforeEach(() => {
    onChangeMock = jest.fn();
    onClearMock = jest.fn();
  });

  it('should render input with label and correct value', () => {
    render(
      <Input
        id='title'
        label='Title'
        value='Test Title'
        onChange={onChangeMock}
      />
    );

    const input = screen.getByLabelText('Title');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('Test Title');
  });

  it('should call onChange when input value changes', () => {
    render(<Input id='title' label='Title' value='' onChange={onChangeMock} />);

    const input = screen.getByLabelText('Title');

    fireEvent.change(input, { target: { value: 'New Value' } });

    expect(onChangeMock).toHaveBeenCalledWith('New Value');
  });

  it('should render clear button if hasClearButton is true and value is not empty', () => {
    render(
      <Input
        id='title'
        label='Title'
        value='Test'
        hasClearButton
        onChange={onChangeMock}
        onClear={onClearMock}
      />
    );

    const clearButton = screen.getByRole('button', { name: 'clear' });
    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);

    expect(onClearMock).toHaveBeenCalled();
  });

  it('should not render clear button if value is empty', () => {
    render(
      <Input
        id='title'
        label='Title'
        value=''
        hasClearButton
        onChange={onChangeMock}
        onClear={onClearMock}
      />
    );

    const clearButton = screen.queryByRole('button', { name: 'clear' });
    expect(clearButton).not.toBeInTheDocument();
  });

  it('should call onClear when clear button is clicked', () => {
    render(
      <Input
        id='test-input'
        label='Test Input'
        value='Some text'
        hasClearButton
        onClear={onClearMock}
        onChange={onChangeMock}
      />
    );

    const clearButton = screen.getByRole('button', { name: 'clear' });

    fireEvent.click(clearButton);

    expect(onClearMock).toHaveBeenCalled();
  });

  it('should render input with the specified type', () => {
    render(
      <Input
        id='password'
        label='Password'
        type='password'
        value=''
        onChange={onChangeMock}
      />
    );

    const input = screen.getByLabelText('Password');
    expect(input).toHaveAttribute('type', 'password');
  });
});
