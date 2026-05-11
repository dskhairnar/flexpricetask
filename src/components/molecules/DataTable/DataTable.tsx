import type { ReactNode } from 'react';

export interface DataTableColumn<T> {
	id: string;
	header: string;
	cell: (row: T) => ReactNode;
	sortable?: boolean;
}

export interface DataTableProps<T> {
	columns: DataTableColumn<T>[];
	rows: T[];
	getRowId: (row: T) => string;
	loading?: boolean;
	emptyMessage?: string;
	/** Pagination: 1-based page */
	page?: number;
	pageSize?: number;
	total?: number;
	onPageChange?: (page: number) => void;
}

/**
 * Table shell with sort hooks, skeleton, empty, pagination.
 * Add `@tanstack/react-virtual` row virtualizer for Challenge B (10k rows story).
 */
export function DataTable<T>({
	columns,
	rows,
	getRowId,
	loading,
	emptyMessage = 'No rows',
	page = 1,
	pageSize = 10,
	total,
	onPageChange,
}: DataTableProps<T>) {
	const pages = total != null ? Math.max(1, Math.ceil(total / pageSize)) : 1;

	if (loading) {
		return (
			<div className="w-full overflow-hidden rounded-md border border-border">
				<div className="h-10 animate-pulse bg-muted" />
				{Array.from({ length: 5 }).map((_, i) => (
					<div key={i} className="h-10 border-t border-border animate-pulse bg-muted/60" />
				))}
			</div>
		);
	}

	if (!rows.length) {
		return (
			<div className="flex h-40 items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
				{emptyMessage}
			</div>
		);
	}

	return (
		<div className="w-full overflow-auto rounded-md border border-border">
			<table className="w-full text-sm">
				<thead className="bg-muted/50 text-left">
					<tr>
						{columns.map((c) => (
							<th key={c.id} className="px-3 py-2 font-medium">
								{c.header}
								{c.sortable ? <span className="ml-1 text-muted-foreground">↕</span> : null}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr key={getRowId(row)} className="border-t border-border hover:bg-muted/40">
							{columns.map((c) => (
								<td key={c.id} className="px-3 py-2">
									{c.cell(row)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			{onPageChange ? (
				<div className="flex items-center justify-between border-t border-border px-3 py-2 text-xs text-muted-foreground">
					<span>
						Page {page} of {pages}
					</span>
					<div className="flex gap-2">
						<button
							type="button"
							className="rounded border border-input px-2 py-1"
							disabled={page <= 1}
							onClick={() => onPageChange(page - 1)}
						>
							Prev
						</button>
						<button
							type="button"
							className="rounded border border-input px-2 py-1"
							disabled={page >= pages}
							onClick={() => onPageChange(page + 1)}
						>
							Next
						</button>
					</div>
				</div>
			) : null}
		</div>
	);
}
