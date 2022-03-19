import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterSearch from './FilterSearch.js';

describe('FilterSearch', () => {
  it('should render five labeld buttons', () => {
    render(<FilterSearch newfilter={'complete'} />);

    const buttonAll = screen.getByLabelText('Alle');
    const buttonEasy = screen.getByLabelText('Einfach');
    const buttonNormal = screen.getByLabelText('Normal');
    const buttonDifficult = screen.getByLabelText('Schwierig');
    const buttonSpecial = screen.getByLabelText('Speziell');

    expect(buttonAll).toBeInTheDocument();
    expect(buttonEasy).toBeInTheDocument();
    expect(buttonNormal).toBeInTheDocument();
    expect(buttonDifficult).toBeInTheDocument();
    expect(buttonSpecial).toBeInTheDocument();
  });

  it('should call the onChange function when the button is clicked', () => {
    const radioCallback = jest.fn();
    render(
      <FilterSearch handleChangeFilter={radioCallback} newFilter={'complete'} />
    );

    const buttonAll = screen.getByLabelText('Alle');
    const buttonEasy = screen.getByLabelText('Einfach');
    const buttonNormal = screen.getByLabelText('Normal');
    const buttonDifficult = screen.getByLabelText('Schwierig');
    const buttonSpecial = screen.getByLabelText('Speziell');

    userEvent.click(buttonAll);
    expect(radioCallback).toBeCalledWith('complete');
    userEvent.click(buttonEasy);
    expect(radioCallback).toBeCalledWith('einfach');
    userEvent.click(buttonNormal);
    expect(radioCallback).toBeCalledWith('normal');
    userEvent.click(buttonDifficult);
    expect(radioCallback).toBeCalledWith('schwierig');
    userEvent.click(buttonSpecial);
    expect(radioCallback).toBeCalledWith('speziell');
  });
});
