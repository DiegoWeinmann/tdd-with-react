import React from 'react';
import { screen, render, configure } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  render(<App />);
  configure({
    throwSuggestions: true,
  });
});

describe('App', () => {
  it('should render without an error', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should have Counter App as heading', () => {
    expect(screen.getByRole('heading').innerHTML).toBe('Counter App');
  });

  it('should render an increment button', () => {
    expect(
      screen.getByRole('button', { name: 'increment counter' })
    ).toBeTruthy();
  });

  it('should render a counter display', () => {
    expect(screen.getByLabelText('counter display')).toBeTruthy();
  });

  it('should start the counter at 0', () => {
    expect(screen.getByLabelText('counter display')).toHaveTextContent(/0/);
  });

  it('should update the counter display when the button is clicked', () => {
    const incButton = screen.getByRole('button', { name: /increment/i });
    userEvent.click(incButton);
    expect(screen.getByLabelText('counter display')).toHaveTextContent(/1/);
  });
});
