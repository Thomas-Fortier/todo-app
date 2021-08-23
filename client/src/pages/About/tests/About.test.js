import { render, screen } from '@testing-library/react';
import About from '../About';

test('About contains the text \'About\'', () => {
  render(<About />);
  const linkElement = screen.getByText('About');
  expect(linkElement).toBeInTheDocument();
});