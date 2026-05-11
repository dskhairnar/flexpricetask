import { useEffect, useRef, useState } from 'react';

export interface TooltipProps {
	/** Tooltip body */
	content: string;
	children: React.ReactNode;
	/** Delay before open (ms) */
	delayDuration?: number;
}

/**
 * Lightweight tooltip. Prefer Radix Tooltip in production for focus management.
 */
export function Tooltip({ content, children, delayDuration = 400 }: TooltipProps) {
	const [visible, setVisible] = useState(false);
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (timer.current) clearTimeout(timer.current);
		};
	}, []);

	return (
		<span
			className="relative inline-flex"
			onMouseEnter={() => {
				timer.current = setTimeout(() => setVisible(true), delayDuration);
			}}
			onMouseLeave={() => {
				if (timer.current) clearTimeout(timer.current);
				setVisible(false);
			}}
			onFocus={() => {
				timer.current = setTimeout(() => setVisible(true), delayDuration);
			}}
			onBlur={() => {
				if (timer.current) clearTimeout(timer.current);
				setVisible(false);
			}}
		>
			{children}
			{visible ? (
				<span
					role="tooltip"
					className="absolute left-1/2 top-full z-20 mt-1 w-max -translate-x-1/2 rounded bg-foreground px-2 py-1 text-xs text-background"
				>
					{content}
				</span>
			) : null}
		</span>
	);
}
