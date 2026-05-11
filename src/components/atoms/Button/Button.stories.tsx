import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Button } from './Button';

const meta = {
	title: 'Submission/Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'Save',
		variant: 'primary',
		size: 'md',
		loading: false,
		disabled: false,
	},
	argTypes: {
		variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
		size: { control: 'select', options: ['sm', 'md', 'lg'] },
		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<Button {...args} variant="primary">
				Primary
			</Button>
			<Button {...args} variant="secondary">
				Secondary
			</Button>
			<Button {...args} variant="ghost">
				Ghost
			</Button>
			<Button {...args} variant="danger">
				Danger
			</Button>
		</div>
	),
};

export const States: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<Button {...args}>Default</Button>
			<Button {...args} loading>
				Loading
			</Button>
			<Button {...args} disabled>
				Disabled
			</Button>
		</div>
	),
};

export const ClickInteraction: Story = {
	args: { children: 'Click me' },
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const btn = canvas.getByRole('button', { name: /click me/i });
		await step('Click fires', async () => {
			await userEvent.click(btn);
			await expect(btn).toBeEnabled();
		});
	},
};
