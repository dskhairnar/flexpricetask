import type { ReactNode } from 'react';
import { Button } from '../../atoms/Button';

export interface EmptyStateProps {
	icon?: ReactNode;
	title: string;
	description: string;
	actionLabel?: string;
	onAction?: () => void;
}

/**
 * Full-region empty state: icon, headline, supporting copy, optional CTA.
 */
export function EmptyState({ icon, title, description, actionLabel = 'Create', onAction }: EmptyStateProps) {
	return (
		<div className="flex min-h-[240px] flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-muted/20 p-8 text-center">
			{icon ? <div className="text-4xl text-muted-foreground">{icon}</div> : null}
			<div>
				<h2 className="text-lg font-semibold">{title}</h2>
				<p className="mt-1 max-w-md text-sm text-muted-foreground">{description}</p>
			</div>
			{onAction ? <Button onClick={onAction}>{actionLabel}</Button> : null}
		</div>
	);
}
