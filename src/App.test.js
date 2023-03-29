import { render, fireEvent } from '@testing-library/react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import App from './App';

test('smoke test', () => {
	render(<App />);
});
test('Screenshot test', () => {
	const { asFragment } = render(<App />);

	expect(asFragment()).toMatchSnapshot();
});
test('Render landing page with job title', () => {
	const { getByText } = render(<App />);

	expect(getByText('Full-Stack Developer')).toBeInTheDocument();
});

test('Rendering Terminal', () => {
	const { getByText } = render(<App />);
	let workTitle = getByText('Full-Stack Developer');
	expect(workTitle).toBeInTheDocument();

	fireEvent.click(getByText('Enter'));

	expect(workTitle).not.toBeInTheDocument();
});
