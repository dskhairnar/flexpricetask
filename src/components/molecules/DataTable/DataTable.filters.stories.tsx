import type { Meta, StoryObj } from '@storybook/react';
import { useMemo } from 'react';
import { useFiltersForRoute } from '../../../hooks/useFilterStore';
import { DataTable, type DataTableColumn } from './DataTable';
import { SearchBar } from '../SearchBar/SearchBar';

type Row = { id: string; name: string };

const ROUTE = 'filters:customers';

const meta = {
	title: 'Submission/Molecules/DataTable/WithFilters',
	tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Challenge A sketch: wire SearchBar → Zustand session filters → table slice.
 * Add shallow URL fingerprint sync in the hook when ready.
 */
function DataTableFiltersDemo() {
	const { filters, setFilter } = useFiltersForRoute(ROUTE);
	const q = String(filters.q ?? '');

	const all: Row[] = useMemo(
		() => [
			{ id: '1', name: 'Acme Corp' },
			{ id: '2', name: 'Globex' },
			{ id: '3', name: 'Initech' },
		],
		[]
	);

	const rows = useMemo(() => {
		if (!q.trim()) return all;
		return all.filter((r) => r.name.toLowerCase().includes(q.toLowerCase()));
	}, [all, q]);

	const columns: DataTableColumn<Row>[] = [{ id: 'name', header: 'Customer', cell: (r) => r.name }];

	return (
		<div className="flex max-w-xl flex-col gap-3">
			<SearchBar
				placeholder="Search customers…"
				value={q}
				onChange={(v) => setFilter('q', v)}
				onClear={() => setFilter('q', '')}
			/>
			<DataTable columns={columns} rows={rows} getRowId={(r) => r.id} emptyMessage="No match" />
		</div>
	);
}

export const WiredToFilterStore: Story = {
	render: () => <DataTableFiltersDemo />,
};
