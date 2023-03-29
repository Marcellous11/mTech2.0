import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

test('Smoke test, does the component render', () => {
	render(<AboutMe />);
});

test('Snapshot ', () => {
	const { asFragment } = render(<AboutMe />);

	expect(asFragment()).toMatchSnapshot();
});

test('should have Quick facts about me', () => {
	const { getByText } = render(<AboutMe />);

	expect(getByText('Quick facts about me')).toBeInTheDocument();
});
