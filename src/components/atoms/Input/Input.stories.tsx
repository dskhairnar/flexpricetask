import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
	title: 'Submission/Atoms/Input',
	component: Input,
	tags: ['autodocs'],
	args: { placeholder: 'Type here' },
	argTypes: {
		type: { control: 'select', options: ['text', 'number', 'email', 'password'] },
		disabled: { control: 'boolean' },
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
	args: { label: 'Display name', placeholder: 'Acme Corp' },
};

export const WithError: Story = {
	args: { label: 'Amount', type: 'number', error: 'Must be greater than zero', defaultValue: '0' },
};

export const CurrencyPrefix: Story = {
	args: { label: 'Price', type: 'number', currencyPrefix: '$', placeholder: '0.00' },
};
