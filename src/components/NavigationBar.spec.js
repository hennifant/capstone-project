import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar.js';

describe('NavigationBar', () => {
  it('renders four links', () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);
  });
});
