import { useMemo, useState } from 'react';

export interface SelectOption {
	value: string;
	label: string;
}

export interface SelectProps {
	options: SelectOption[];
	value: string | null;
	onChange: (value: string) => void;
	placeholder?: string;
	/** Enable simple client-side search over option labels */
	searchable?: boolean;
	disabled?: boolean;
	label?: string;
}

/**
 * Single-select dropdown. Swap internals for Cmdk/Radix when you need full a11y parity.
 */
export function Select({
	options,
	value,
	onChange,
	placeholder = 'Select…',
	searchable,
	disabled,
	label,
}: SelectProps) {
	const [open, setOpen] = useState(false);
	const [q, setQ] = useState('');

	const filtered = useMemo(() => {
		if (!searchable || !q.trim()) return options;
		const needle = q.toLowerCase();
		return options.filter((o) => o.label.toLowerCase().includes(needle));
	}, [options, q, searchable]);

	const selected = options.find((o) => o.value === value);

	return (
		<div className="relative w-full max-w-xs">
			{label ? <div className="mb-1 text-sm font-medium">{label}</div> : null}
			<button
				type="button"
				disabled={disabled}
				className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-left text-sm"
				onClick={() => setOpen((o) => !o)}
			>
				<span className={selected ? '' : 'text-muted-foreground'}>{selected?.label ?? placeholder}</span>
				<span aria-hidden>▾</span>
			</button>
			{open ? (
				<div className="absolute z-10 mt-1 w-full rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md">
					{searchable ? (
						<input
							className="mb-1 h-8 w-full rounded border border-input bg-background px-2 text-sm"
							placeholder="Search…"
							value={q}
							onChange={(e) => setQ(e.target.value)}
						/>
					) : null}
					<ul className="max-h-48 overflow-auto">
						{filtered.map((o) => (
							<li key={o.value}>
								<button
									type="button"
									className="flex w-full rounded px-2 py-1.5 text-left text-sm hover:bg-accent"
									onClick={() => {
										onChange(o.value);
										setOpen(false);
										setQ('');
									}}
								>
									{o.label}
								</button>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</div>
	);
}
