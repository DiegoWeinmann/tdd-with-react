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

	it('should render a counter display', () => {
		expect(screen.getByLabelText('counter display')).toBeInTheDocument();
	});

	it('should render an increment button', () => {
		expect(
			screen.getByRole('button', { name: 'increment counter' })
		).toBeInTheDocument();
	});

	it('should render a decrement button', () => {
		expect(
			screen.getByRole('button', { name: 'decrement counter' })
		).toBeInTheDocument();
	});

	it('should start the counter at 0', () => {
		expect(screen.getByLabelText('counter display')).toHaveTextContent(/0/);
	});

	it('should increment the counter when increment button is clicked', () => {
		const incButton = screen.getByRole('button', { name: /increment/i });
		userEvent.click(incButton);
		expect(screen.getByLabelText('counter display')).toHaveTextContent(/1/);
	});

	it('should decrement the counter when decrement button is clicked', async () => {
		const incButton = screen.getByRole('button', { name: /increment/i });
		const decButton = screen.getByRole('button', { name: /decrement/i });
		const counter = screen.getByLabelText('counter display');
		userEvent.click(incButton);
		userEvent.click(decButton);
		expect(counter).toHaveTextContent(/0/);
	});

	it('should show an error message if the user tries to decrement when the counter has a value of 0', () => {
		expect(screen.queryByText(/Error/i)).not.toBeInTheDocument();
		const decButton = screen.getByRole('button', { name: /decrement/i });
		const incButton = screen.getByRole('button', { name: /increment/i });
		userEvent.click(decButton);
		expect(screen.queryByLabelText('counter display')).toHaveTextContent('0');
		expect(screen.queryByText(/Error/i)).toBeInTheDocument();
		userEvent.click(incButton);
		expect(screen.queryByText(/Error/i)).not.toBeInTheDocument();
	});
});
