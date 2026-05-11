import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './MetricCard';

const meta = {
	title: 'Submission/Molecules/MetricCard',
	component: MetricCard,
	tags: ['autodocs'],
	args: { label: 'MRR', value: '$128,400', trend: 'up', trendLabel: '12% vs last month' },
	argTypes: {
		trend: { control: 'select', options: ['up', 'down', 'flat'] },
	},
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
	render: (args) => (
		<div className="grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
			<MetricCard {...args} label="MRR" value="$128k" trend="up" trendLabel="+4%" />
			<MetricCard {...args} label="Active subs" value="3,402" trend="flat" trendLabel="Stable" />
			<MetricCard {...args} label="Past due" value="$2.1k" trend="down" trendLabel="-18%" />
		</div>
	),
};
