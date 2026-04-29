import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/MatrixBackground', () => () => null);
jest.mock('react-awesome-reveal', () => ({
  Fade: ({ children }) => <>{children}</>,
}));

beforeEach(() => {
  window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

test('renders portfolio content', () => {
  render(<App />);
  expect(screen.getAllByText(/anish gupta/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/4 years of experience/i).length).toBeGreaterThan(0);
});
