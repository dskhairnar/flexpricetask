import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { Select, type SelectOption } from './Select';

const options: SelectOption[] = [
	{ value: 'active', label: 'Active' },
	{ value: 'archived', label: 'Archived' },
	{ value: 'trial', label: 'Trial' },
];

function StatefulSelect(args: Partial<ComponentProps<typeof Select>>) {
	const [value, setValue] = useState<string | null>(null);
	return <Select {...args} options={options} value={value} onChange={setValue} />;
}

const meta = {
	title: 'Submission/Atoms/Select',
	component: Select,
	tags: ['autodocs'],
	render: (args) => <StatefulSelect {...args} />,
	argTypes: {
		searchable: { control: 'boolean' },
		disabled: { control: 'boolean' },
	},
} as Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Plan status' } };

export const Searchable: Story = { args: { label: 'Plan status', searchable: true } };
