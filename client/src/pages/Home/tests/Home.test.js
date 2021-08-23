import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('Home contains the text \'Home\'', () => {
  render(<Home />);
  const linkElement = screen.getByText('Home');
  expect(linkElement).toBeInTheDocument();
});