import { forwardRef } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Visual style variant */
	variant?: ButtonVariant;
	size?: ButtonSize;
	loading?: boolean;
}

const variantClass: Record<ButtonVariant, string> = {
	primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
	secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
	ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',
	danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
};

const sizeClass: Record<ButtonSize, string> = {
	sm: 'h-8 px-3 text-xs',
	md: 'h-9 px-4 text-sm',
	lg: 'h-10 px-6 text-base',
};

/**
 * Primary action control. Supports variants, sizes, loading and disabled states.
 * Replace styles with your own tokens; structure mirrors common dashboard CTAs.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ variant = 'primary', size = 'md', loading, className = '', disabled, children, ...props },
	ref
) {
	const isDisabled = disabled || loading;
	return (
		<button
			ref={ref}
			type="button"
			disabled={isDisabled}
			className={`inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 ${variantClass[variant]} ${sizeClass[size]} ${className}`}
			{...props}
		>
			{loading ? <span className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden /> : null}
			{children}
		</button>
	);
});
