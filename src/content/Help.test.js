import { logRoles, prettyDOM, render, screen } from '@testing-library/react';
import Help from './Help';

test('Smoke test, does the component render', () => {
	render(<Help />);
});

test('Snapshot ', () => {
	const { asFragment } = render(<Help />);

	expect(asFragment()).toMatchSnapshot();
});

test('should have About me', () => {
	const { getByText, getAllByText, findByText } = render(<Help />);

	expect(getAllByText(`about me`)).toBeInstanceOf(Array);
	expect(getAllByText(`about me`)[0]).toBeInTheDocument();
});
