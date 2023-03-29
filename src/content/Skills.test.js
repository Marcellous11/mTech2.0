import { logRoles, prettyDOM, render, screen } from '@testing-library/react';
import Skills from './Skills';

test('Smoke test, does the component render', () => {
	render(<Skills />);
});

test('Snapshot ', () => {
	const { asFragment } = render(<Skills />);

	expect(asFragment()).toMatchSnapshot();
});

test('JavaScript should be in the document', () => {
	const { getByText } = render(<Skills />);

	expect(getByText(`JavaScript`)).toBeInTheDocument();
});
test('Python should be in the document', () => {
	const { getByText } = render(<Skills />);

	expect(getByText(`Python`)).toBeInTheDocument();
});
test('SQL should be in the document', () => {
	const { getByText } = render(<Skills />);

	expect(getByText(`SQL`)).toBeInTheDocument();
});
test('C++ should be in the document', () => {
	const { getByText } = render(<Skills />);

	expect(getByText(`C++`)).toBeInTheDocument();
});
test('JavaScript should be in the document', () => {
	const { getByText } = render(<Skills />);

	expect(getByText(`Node`)).toBeInTheDocument();
});
test('JavaScript should be in the document', () => {
	const { getByText } = render(<Skills />);

	expect(getByText(`Node`)).toBeInTheDocument();
});
