import type { Meta, StoryObj } from '@storybook/react';
import { PricingTierTable } from './PricingTierTable';

const meta = {
	title: 'Submission/Organisms/PricingTierTable',
	component: PricingTierTable,
	tags: ['autodocs'],
	args: {
		tiers: [
			{ upToUnits: 10_000, unitPrice: 0.01 },
			{ upToUnits: 100_000, unitPrice: 0.008 },
			{ upToUnits: 1_000_000, unitPrice: 0.005 },
		],
	},
} satisfies Meta<typeof PricingTierTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
