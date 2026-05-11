import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
	it('associates label with control', () => {
		render(<Input label="Email" placeholder="you@example.com" />);
		const input = screen.getByLabelText('Email');
		expect(input).toHaveAttribute('placeholder', 'you@example.com');
	});

	it('shows error text', () => {
		render(<Input label="Name" error="Required" />);
		expect(screen.getByText('Required')).toBeInTheDocument();
	});
});
