import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ragam', () => {
  render(<App />);
  const linkElement = screen.getByText('Ragam');
  expect(linkElement).toBeInTheDocument();
});
