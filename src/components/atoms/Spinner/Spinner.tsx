export interface SpinnerProps {
	/** Accessible status label */
	label?: string;
	size?: 'sm' | 'md' | 'lg';
}

const sizeMap = { sm: 'size-4 border-2', md: 'size-8 border-2', lg: 'size-12 border-[3px]' };

/**
 * Inline loading indicator or full-region spinner when composed in LoadingState layouts.
 */
export function Spinner({ label = 'Loading', size = 'md' }: SpinnerProps) {
	return (
		<div className="flex items-center gap-2 text-muted-foreground" role="status" aria-live="polite">
			<span className={`inline-block animate-spin rounded-full border-muted-foreground border-t-transparent ${sizeMap[size]}`} />
			<span className="text-sm">{label}</span>
		</div>
	);
}
