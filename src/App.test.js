import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  expect(screen.getByText('Hello Canada')).toBeInTheDocument();
});

test('initial dataType state is provinces', () => {
  render(<App />);
  expect(screen.getByText('Provinces')).toBeInTheDocument();
});

