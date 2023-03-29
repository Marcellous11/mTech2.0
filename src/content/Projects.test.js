import { logRoles, prettyDOM, render, screen } from '@testing-library/react';
import Projects from './Projects';

test('Smoke test, does the component render', () => {
	render(<Projects />);
});

test('Snapshot ', () => {
	const { asFragment } = render(<Projects />);

	expect(asFragment()).toMatchSnapshot();
});

test('should have "A gif of my website" in alt text', () => {
	const { getByText, getAllByText, getByAltText } = render(<Projects />);

	expect(getByAltText(`A gif of my website`)).toBeInTheDocument();
});
test('should have "Gif of local leaders website" in alt text', () => {
	const { getByText, getAllByText, getByAltText } = render(<Projects />);

	expect(getByAltText(`Gif of local leaders website`)).toBeInTheDocument();
});
test('should have "GIF of Jobly frontend" in alt text', () => {
	const { getByText, getAllByText, getByAltText } = render(<Projects />);

	expect(getByAltText(`GIF of Jobly frontend`)).toBeInTheDocument();
});
test('should have "GIF of Yodlr frontend" in alt text', () => {
	const { getByText, getAllByText, getByAltText } = render(<Projects />);

	expect(getByAltText(`GIF of Yodlr frontend`)).toBeInTheDocument();
});
