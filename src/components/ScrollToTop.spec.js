import { render } from '@testing-library/react';
import ScrollToTop from './ScrollToTop.js';

describe('ScrollToTop', () => {
  it('renders a up button', () => {
    render(<ScrollToTop />);
  });
});
