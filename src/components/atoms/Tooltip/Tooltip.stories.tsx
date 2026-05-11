import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta = {
	title: 'Submission/Atoms/Tooltip',
	component: Tooltip,
	tags: ['autodocs'],
	args: { content: 'Usage is metered per billing period.', delayDuration: 400 },
	argTypes: { delayDuration: { control: { type: 'number', min: 0, max: 2000, step: 100 } } },
} as Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<Tooltip content={args.content ?? 'Usage is metered per billing period.'} delayDuration={args.delayDuration}>
			<button type="button" className="text-sm underline">
				Hover for info
			</button>
		</Tooltip>
	),
};

export const Instant: Story = {
	args: { delayDuration: 0, content: 'No delay' },
	render: (args) => (
		<Tooltip content={args.content ?? 'No delay'} delayDuration={args.delayDuration}>
			<button type="button" className="text-sm underline">
				Hover (no delay)
			</button>
		</Tooltip>
	),
};
