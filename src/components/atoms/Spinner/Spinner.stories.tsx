import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta = {
	title: 'Submission/Atoms/Spinner',
	component: Spinner,
	tags: ['autodocs'],
	argTypes: { size: { control: 'select', options: ['sm', 'md', 'lg'] } },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Loading invoices…' } };

export const Sizes: Story = {
	render: (args) => (
		<div className="flex flex-col gap-4">
			<Spinner {...args} size="sm" />
			<Spinner {...args} size="md" />
			<Spinner {...args} size="lg" />
		</div>
	),
};
