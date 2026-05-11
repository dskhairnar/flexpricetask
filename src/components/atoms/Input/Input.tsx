import { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	currencyPrefix?: string;
}

/**
 * Text / number field with optional label, error text, and currency prefix.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ label, error, currencyPrefix, className = '', id, ...props },
	ref
) {
	const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-') ?? undefined;
	return (
		<div className="flex w-full max-w-sm flex-col gap-1">
			{label ? (
				<label htmlFor={inputId} className="text-sm font-medium text-foreground">
					{label}
				</label>
			) : null}
			<div className="relative flex">
				{currencyPrefix ? (
					<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
						{currencyPrefix}
					</span>
				) : null}
				<input
					ref={ref}
					id={inputId}
					className={`h-9 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${currencyPrefix ? 'pl-7' : ''} ${error ? 'border-destructive' : ''} ${className}`}
					aria-invalid={Boolean(error)}
					{...props}
				/>
			</div>
			{error ? <p className="text-xs text-destructive">{error}</p> : null}
		</div>
	);
});
