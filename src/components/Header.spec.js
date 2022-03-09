import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the h1 element for Tank Buddy', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toHaveTextContent('Tank Buddy');
  });
});
