import type { Meta, StoryObj } from '@storybook/react';
import { MeterProgress } from './MeterProgress';

const meta = {
	title: 'Submission/Molecules/MeterProgress',
	component: MeterProgress,
	tags: ['autodocs'],
	args: { label: 'API calls', used: 72_000, entitled: 100_000, unitLabel: 'calls' },
	argTypes: {
		used: { control: { type: 'number' } },
		entitled: { control: { type: 'number' } },
	},
} satisfies Meta<typeof MeterProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OverEntitlement: Story = {
	args: { used: 120_000, entitled: 100_000 },
};
