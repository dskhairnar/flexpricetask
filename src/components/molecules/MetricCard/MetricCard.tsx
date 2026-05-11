export type TrendDirection = 'up' | 'down' | 'flat';

export interface MetricCardProps {
	label: string;
	value: string;
	trend?: TrendDirection;
	trendLabel?: string;
}

/**
 * Dashboard KPI tile: label, primary value, optional trend hint.
 */
export function MetricCard({ label, value, trend = 'flat', trendLabel }: MetricCardProps) {
	const arrow = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→';
	const tone =
		trend === 'up' ? 'text-emerald-600' : trend === 'down' ? 'text-red-600' : 'text-muted-foreground';
	return (
		<div className="rounded-lg border border-border bg-card p-4 shadow-sm">
			<div className="text-sm text-muted-foreground">{label}</div>
			<div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
			{trendLabel ? (
				<div className={`mt-2 text-xs font-medium ${tone}`}>
					<span aria-hidden>{arrow}</span> {trendLabel}
				</div>
			) : null}
		</div>
	);
}
