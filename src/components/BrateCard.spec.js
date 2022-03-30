import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BrateCard from './BrateCard';

describe('BrateCard', () => {
  it('render a div with heading, list, and button  to show more information of a invertebrates', () => {
    render(
      <BrateCard
        brate={{
          BrateLatin: 'Atyoida pilipes',
          BrateGerman: 'Sulawesi Fächergarnele',
          Characteristics: '5 - 6 cm',
          Food: 'Algen, Kleinstorganismen, Flockenfutter',
          Husbandry: 'Einzelhaltung',
          Tanksize: '80 Liter',
          Temperature: '20 - 28 Grad',
          Ph: '6,0 - 8,0',
          Difficulty: 'normal',
          Image: 'https://www.aquarium-guide.de/sulawesi-faechergarnele2.gif',
          Region: 'mitte',
        }}
      />
    );

    const brateName = screen.getByRole('heading', { level: 2 });
    expect(brateName).toHaveTextContent('Sulawesi Fächergarnele');

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
