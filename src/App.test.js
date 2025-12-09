import { render, screen } from '@testing-library/react';
import App from './App';

test('renders theme title', () => {
  render(<App />);
  const titleElement = screen.getByText(/E-commerce starter Ionic 6 theme/i);
  expect(titleElement).toBeInTheDocument();
});
