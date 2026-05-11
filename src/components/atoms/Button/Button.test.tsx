import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
	it('renders children', () => {
		render(<Button>Hello</Button>);
		expect(screen.getByRole('button', { name: 'Hello' })).toBeInTheDocument();
	});

	it('does not fire when disabled', async () => {
		const user = userEvent.setup();
		const onClick = vi.fn();
		render(
			<Button disabled onClick={onClick}>
				X
			</Button>
		);
		await user.click(screen.getByRole('button'));
		expect(onClick).not.toHaveBeenCalled();
	});
});
