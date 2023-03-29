import { render, screen } from '@testing-library/react';
import Work from './Work';

test('Smoke test, does the component render', () => {
	render(<Work />);
});

test('Snapshot ', () => {
	const { asFragment } = render(<Work />);

	expect(asFragment()).toMatchSnapshot();
});

test(' "Work History" title should be on page', () => {
	const { getByText } = render(<Work />);

	expect(getByText('Work History')).toBeInTheDocument();
});

test(' "Software Engineering Coding Bootcamp, Remote" title should be on page', () => {
	const { getByText } = render(<Work />);

	expect(getByText('Software Engineering Coding Bootcamp, Remote')).toBeInTheDocument();
});
test(' "Personal Website “Marcellous.tech”, Remote" title should be on page', () => {
	const { getByText } = render(<Work />);

	expect(getByText('Personal Website “Marcellous.tech”, Remote')).toBeInTheDocument();
});
test(' "Lift Energy Solar, Fresno, CA" title should be on page', () => {
	const { getByText } = render(<Work />);

	expect(getByText('Lift Energy Solar, Fresno, CA')).toBeInTheDocument();
});
