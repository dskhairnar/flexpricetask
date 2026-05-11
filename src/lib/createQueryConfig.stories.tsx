import type { Meta, StoryObj } from '@storybook/react';
import { QUERY_PRESETS, createQueryConfig } from './createQueryConfig';

const meta = {
	title: 'Submission/Lib/createQueryConfig',
	tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Challenge C: presets + merge helper (pair with real `useQuery` in app code). */
export const Presets: Story = {
	render: () => (
		<pre className="rounded-md bg-muted p-4 text-xs">
			{JSON.stringify(
				{
					REALTIME: QUERY_PRESETS.REALTIME,
					DEFAULT: createQueryConfig(),
					STATIC: QUERY_PRESETS.STATIC,
					custom: createQueryConfig({ staleTime: 30_000 }),
				},
				null,
				2
			)}
		</pre>
	),
};
