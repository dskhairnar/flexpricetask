import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';

const meta = {
	title: 'Submission/Organisms/EmptyState',
	component: EmptyState,
	tags: ['autodocs'],
	args: {
		title: 'No invoices yet',
		description: 'When you generate your first invoice it will show up here.',
		actionLabel: 'New invoice',
		onAction: () => {},
	},
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { icon: '📄' },
};

export const WithoutAction: Story = {
	args: { icon: '🔍', title: 'No results', description: 'Try adjusting filters.', onAction: undefined },
};
