import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/I made a change. It should be reflected in my live deployment!/i);
  expect(linkElement).toBeInTheDocument();
});
