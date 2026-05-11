export interface DateRangeValue {
	from: string;
	to: string;
}

export interface DateRangePickerProps {
	value: DateRangeValue;
	onChange: (next: DateRangeValue) => void;
	disabled?: boolean;
}

/**
 * Simple from/to date controls for analytics filters. Swap for `react-day-picker` when needed.
 */
export function DateRangePicker({ value, onChange, disabled }: DateRangePickerProps) {
	return (
		<div className="flex flex-wrap items-end gap-2">
			<label className="flex flex-col gap-1 text-sm">
				<span className="text-muted-foreground">From</span>
				<input
					type="date"
					disabled={disabled}
					className="h-9 rounded-md border border-input bg-background px-2 text-sm"
					value={value.from}
					onChange={(e) => onChange({ ...value, from: e.target.value })}
				/>
			</label>
			<label className="flex flex-col gap-1 text-sm">
				<span className="text-muted-foreground">To</span>
				<input
					type="date"
					disabled={disabled}
					className="h-9 rounded-md border border-input bg-background px-2 text-sm"
					value={value.to}
					onChange={(e) => onChange({ ...value, to: e.target.value })}
				/>
			</label>
		</div>
	);
}
