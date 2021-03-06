import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FishCard from './FishCard';

describe('FishCard', () => {
  it('render a div with heading, list, and button  to show more information of a fish', () => {
    render(
      <FishCard
        fish={{
          FishLatin: 'Betta splendens',
          FishGerman: 'Siamesischer Kampffisch',
          Characteristics: '5 - 7 cm',
          Food: 'Lebend- und Frostfutter, Trockenfutter',
          Husbandry: 'Einzelhaltung',
          Tanksize: '50 Liter',
          Age: '3 Jahre',
          Temperature: '24-30 Grad',
          Ph: '6,0 - 7,5',
          Difficulty: 'Einfach',
          Region: 'oben, mitte',
        }}
      />
    );

    const fishName = screen.getByRole('heading', { level: 2 });
    expect(fishName).toHaveTextContent('Siamesischer Kampffisch');

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();

    const bookmarkButton = screen.getByRole('button', { name: /bookmark/i });
    expect(bookmarkButton).toBeInTheDocument();

    const showDetailsButton = screen.getByRole('button', {
      name: /Eigenschaften/i,
    });
    expect(showDetailsButton).toBeInTheDocument();

    userEvent.click(showDetailsButton);

    const characteristics = screen.getByRole('list');
    expect(characteristics).toBeInTheDocument();

    userEvent.click(showDetailsButton);

    expect(characteristics).not.toBeInTheDocument();
  });
});
