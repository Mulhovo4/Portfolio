import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio owner name', () => {
  render(<App />);
  expect(screen.getByText(/Cleyton Edmilson Inguane Mulhovo/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Baixar CV/i })).toBeInTheDocument();
});
