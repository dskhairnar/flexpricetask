export type BadgeTone = 'default' | 'success' | 'warning' | 'destructive' | 'muted';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	/** Semantic colour tone */
	tone?: BadgeTone;
}

const toneClass: Record<BadgeTone, string> = {
	default: 'bg-secondary text-secondary-foreground',
	success: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400',
	warning: 'bg-amber-500/15 text-amber-800 dark:text-amber-300',
	destructive: 'bg-destructive/15 text-destructive',
	muted: 'bg-muted text-muted-foreground',
};

/**
 * Compact status / label chip (plans, invoices, subscriptions).
 */
export function Badge({ tone = 'default', className = '', children, ...props }: BadgeProps) {
	return (
		<span
			className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${toneClass[tone]} ${className}`}
			{...props}
		>
			{children}
		</span>
	);
}
