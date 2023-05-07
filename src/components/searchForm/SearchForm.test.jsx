import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  it('handles form submission and calls setSearchParams', () => {
    const handler = jest.fn();

    const newParams = {};
    render(<SearchForm newParams={newParams} setSearchParams={handler} />);

    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'rome' } });

    const submitButton = screen.getByText('Find');
    fireEvent.click(submitButton);

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledWith({
      ...newParams,
      search: 'rome',
    });

    expect(textbox).toHaveValue('');
  });

  it('should update input value as user types', () => {
    const setSearchParams = jest.fn();
    render(<SearchForm newParams={{}} setSearchParams={setSearchParams} />);
    const input = screen.getByPlaceholderText('Flights number or city');

    fireEvent.change(input, { target: { value: 'Rome' } });
    expect(input.value).toBe('Rome');

    fireEvent.change(input, { target: { value: 'Paris' } });
    expect(input.value).toBe('Paris');
  });
});
