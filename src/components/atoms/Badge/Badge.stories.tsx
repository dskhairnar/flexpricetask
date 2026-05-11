import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
	title: 'Submission/Atoms/Badge',
	component: Badge,
	tags: ['autodocs'],
	args: { children: 'Active', tone: 'success' },
	argTypes: {
		tone: { control: 'select', options: ['default', 'success', 'warning', 'destructive', 'muted'] },
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PlanAndInvoice: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<Badge {...args} tone="success">
				Plan · Active
			</Badge>
			<Badge {...args} tone="muted">
				Plan · Archived
			</Badge>
			<Badge {...args} tone="success">
				Invoice · Paid
			</Badge>
			<Badge {...args} tone="warning">
				Invoice · Draft
			</Badge>
			<Badge {...args} tone="destructive">
				Invoice · Void
			</Badge>
		</div>
	),
};
