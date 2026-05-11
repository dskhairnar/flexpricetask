import type { Meta, StoryObj } from '@storybook/react';
import { InvoiceStatusBadge } from './InvoiceStatusBadge';

const meta = {
	title: 'Submission/Molecules/InvoiceStatusBadge',
	component: InvoiceStatusBadge,
	tags: ['autodocs'],
	args: { status: 'paid' },
	argTypes: {
		status: { control: 'select', options: ['paid', 'draft', 'void', 'open', 'uncollectible', 'unknown'] },
	},
} satisfies Meta<typeof InvoiceStatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllStatuses: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			{['paid', 'draft', 'void', 'open', 'uncollectible'].map((s) => (
				<InvoiceStatusBadge key={s} {...args} status={s} />
			))}
		</div>
	),
};
