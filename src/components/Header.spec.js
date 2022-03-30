import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the h1 element for AppQuarium', () => {
    render(<Header children={'AppQuarium'} />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('AppQuarium');
  });
});
