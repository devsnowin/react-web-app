import { render, screen } from '@testing-library/react';
import App from './App';

test('check if the link is rendered', () => {
  render(<App />);
  const linkElement = screen.getByTestId('info-link');
  expect(linkElement).toBeInTheDocument()
});

test('is valid url', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement.href).toContain("devsnow.in")
});
