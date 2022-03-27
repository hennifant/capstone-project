import { render, screen } from '@testing-library/react';
import TankCard from './TankCard.js';

describe('TankCard', () => {
  it('renders date, title and text and a delete button', () => {
    render(<TankCard title="title" />);

    const title = screen.getByText('title');
    const characteristics = screen.getByRole('list');
    const deleteButton = screen.getByRole('button', { name: /löschen/i });

    expect(title).toBeInTheDocument();
    expect(characteristics).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
});
