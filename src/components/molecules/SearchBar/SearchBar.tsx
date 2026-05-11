import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
	onClear: () => void;
	placeholder?: string;
	debounceMs?: number;
	disabled?: boolean;
}

/**
 * Debounced search field with clear control (tables, analytics filters).
 */
export function SearchBar({
	value,
	onChange,
	onClear,
	placeholder = 'Search…',
	debounceMs = 300,
	disabled,
}: SearchBarProps) {
	const [local, setLocal] = useState(value);

	useEffect(() => {
		setLocal(value);
	}, [value]);

	const push = useDebouncedCallback((next: string) => onChange(next), debounceMs);

	return (
		<div className="relative max-w-md">
			<input
				className="h-9 w-full rounded-md border border-input bg-background pr-16 pl-3 text-sm"
				placeholder={placeholder}
				disabled={disabled}
				value={local}
				onChange={(e) => {
					const next = e.target.value;
					setLocal(next);
					push(next);
				}}
			/>
			{local ? (
				<button
					type="button"
					className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
					onClick={() => {
						setLocal('');
						onChange('');
						onClear();
					}}
				>
					Clear
				</button>
			) : null}
		</div>
	);
}
