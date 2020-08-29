import React from 'react';
import { screen, render } from '@testing-library/react';
import Congrats, { CongratsProps } from './Congrats';

const setup = (props: CongratsProps) => {
	render(<Congrats {...props} />);
};

describe('<Congrats/>', () => {
	it('renders without crashing', () => {
		setup({ success: true });
		expect(screen.queryByRole('main')).toBeInTheDocument();
	});

	it('renders no text when "success" prop is false', () => {
		setup({ success: false });
		expect(screen.queryByText(/Congrats/i)).not.toBeInTheDocument();
	});

	it('renders non-empty congrats message when success prop is true', () => {
		setup({ success: true });
		expect(screen.queryByText(/Congrats/i)).toBeInTheDocument();
	});
});
