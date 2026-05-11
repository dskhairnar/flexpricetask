import type { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';
import { DataTable, type DataTableColumn } from './DataTable';

const metaTable = {
	title: 'Submission/Molecules/DataTable',
	component: DataTable,
	tags: ['autodocs'],
} as Meta<typeof DataTable>;

type Row = { id: string; name: string; status: string };

const columns: DataTableColumn<Row>[] = [
	{ id: 'name', header: 'Customer', sortable: true, cell: (r) => r.name },
	{ id: 'status', header: 'Status', cell: (r) => r.status },
];

export default metaTable;
type Story = StoryObj<typeof metaTable>;

function DataTableDefaultDemo() {
	const rows: Row[] = useMemo(
		() => [
			{ id: '1', name: 'Acme', status: 'Active' },
			{ id: '2', name: 'Globex', status: 'Trial' },
		],
		[]
	);
	return <DataTable columns={columns} rows={rows} getRowId={(r) => r.id} />;
}

export const Default: Story = {
	render: () => <DataTableDefaultDemo />,
};

export const Loading: Story = {
	render: () => <DataTable columns={columns} rows={[]} getRowId={(r) => r.id} loading />,
};

export const Empty: Story = {
	render: () => (
		<DataTable columns={columns} rows={[]} getRowId={(r) => r.id} emptyMessage="No customers yet" />
	),
};

function DataTablePaginationDemo() {
	const [page, setPage] = useState(1);
	const all = useMemo(
		() =>
			Array.from({ length: 25 }, (_, i) => ({
				id: String(i + 1),
				name: `Customer ${i + 1}`,
				status: 'Active',
			})),
		[]
	);
	const pageSize = 10;
	const slice = all.slice((page - 1) * pageSize, page * pageSize);
	return (
		<DataTable
			columns={columns}
			rows={slice}
			getRowId={(r) => r.id}
			page={page}
			pageSize={pageSize}
			total={all.length}
			onPageChange={setPage}
		/>
	);
}

export const Pagination: Story = {
	render: () => <DataTablePaginationDemo />,
};
