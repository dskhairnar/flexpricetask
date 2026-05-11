import type { ReactNode } from 'react';

export interface SidebarNavItem {
	id: string;
	label: string;
	href: string;
	icon?: ReactNode;
}

export interface SidebarNavProps {
	items: SidebarNavItem[];
	activeId: string;
	collapsed?: boolean;
	onToggleCollapse?: () => void;
}

/**
 * Collapsible sidebar with active item highlighting (app shell pattern).
 */
export function SidebarNav({ items, activeId, collapsed, onToggleCollapse }: SidebarNavProps) {
	return (
		<aside
			className={`flex h-full flex-col border-r border-border bg-card ${collapsed ? 'w-14' : 'w-56'}`}
		>
			<div className="flex items-center justify-between border-b border-border p-2">
				{!collapsed ? <span className="text-sm font-semibold">FlexPrice</span> : <span className="sr-only">Menu</span>}
				{onToggleCollapse ? (
					<button type="button" className="rounded p-1 text-muted-foreground hover:bg-muted" onClick={onToggleCollapse}>
						{collapsed ? '→' : '←'}
					</button>
				) : null}
			</div>
			<nav className="flex flex-1 flex-col gap-0.5 p-2">
				{items.map((item) => {
					const active = item.id === activeId;
					return (
						<a
							key={item.id}
							href={item.href}
							className={`flex items-center gap-2 rounded-md px-2 py-2 text-sm ${
								active ? 'bg-primary/10 font-medium text-primary' : 'text-muted-foreground hover:bg-muted'
							}`}
						>
							{item.icon ? <span className="shrink-0">{item.icon}</span> : null}
							{!collapsed ? <span>{item.label}</span> : <span className="sr-only">{item.label}</span>}
						</a>
					);
				})}
			</nav>
		</aside>
	);
}
