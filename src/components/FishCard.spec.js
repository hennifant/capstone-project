import { render, screen } from '@testing-library/react';
import FishCard from './FishCard';

describe('FishCard', () => {
  it('render a div with heading and list of fish', () => {
    render(
      <DrinkCard
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
        }}
      />
    );

    const fishName = screen.getByRole('heading', { level: 2 });
    expect(fishName).toHaveTextContent('Siamesischer Kampffisch');

    const characteristics = screen.getByRole('list');
    expect(characteristics).toBeInTheDocument();
  });
});
