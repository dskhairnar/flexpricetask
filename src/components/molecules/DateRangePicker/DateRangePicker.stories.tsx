import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateRangePicker, type DateRangeValue } from './DateRangePicker';

function DateRangePickerStatefulDemo() {
	const [value, setValue] = useState<DateRangeValue>({ from: '2025-04-01', to: '2025-04-30' });
	return (
		<div className="space-y-2">
			<DateRangePicker value={value} onChange={setValue} />
			<pre className="rounded bg-muted p-2 text-xs">{JSON.stringify(value, null, 2)}</pre>
		</div>
	);
}

const meta = {
	title: 'Submission/Molecules/DateRangePicker',
	component: DateRangePicker,
	tags: ['autodocs'],
	render: () => <DateRangePickerStatefulDemo />,
} as Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {} as never,
};

function DateRangePickerDisabledDemo() {
	const [value, setValue] = useState<DateRangeValue>({ from: '2025-01-01', to: '2025-01-31' });
	return <DateRangePicker value={value} onChange={setValue} disabled />;
}

export const Disabled: Story = {
	args: {} as never,
	render: () => <DateRangePickerDisabledDemo />,
};
