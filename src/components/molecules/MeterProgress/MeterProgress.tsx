export interface MeterProgressProps {
	label: string;
	used: number;
	entitled: number;
	unitLabel?: string;
}

/**
 * Usage meter: used vs entitled units with a labelled progress bar.
 */
export function MeterProgress({ label, used, entitled, unitLabel = 'units' }: MeterProgressProps) {
	const pct = entitled > 0 ? Math.min(100, Math.round((used / entitled) * 100)) : 0;
	return (
		<div className="max-w-md space-y-1">
			<div className="flex justify-between text-sm">
				<span className="font-medium">{label}</span>
				<span className="text-muted-foreground">
					{used.toLocaleString()} / {entitled.toLocaleString()} {unitLabel}
				</span>
			</div>
			<div className="h-2 w-full overflow-hidden rounded-full bg-muted">
				<div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
			</div>
			<div className="text-xs text-muted-foreground">{pct}% used</div>
		</div>
	);
}
