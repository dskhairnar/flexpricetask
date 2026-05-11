import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import { SearchBar } from './SearchBar';

function SearchBarStatefulDemo() {
	const [value, setValue] = useState('');
	return (
		<div className="max-w-md space-y-2">
			<SearchBar value={value} onChange={setValue} onClear={() => setValue('')} placeholder="Search…" />
			<div className="text-xs text-muted-foreground">Value: {value || '∅'}</div>
		</div>
	);
}

const meta = {
	title: 'Submission/Molecules/SearchBar',
	component: SearchBar,
	tags: ['autodocs'],
	render: () => <SearchBarStatefulDemo />,
} as Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {} as never,
};

export const ClearInteraction: Story = {
	args: {} as never,
	render: () => <SearchBarStatefulDemo />,
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Search…');
		await step('Type then clear', async () => {
			await userEvent.type(input, 'acme');
			const clear = await canvas.findByRole('button', { name: /clear/i });
			await userEvent.click(clear);
			await expect(input).toHaveValue('');
		});
	},
};
