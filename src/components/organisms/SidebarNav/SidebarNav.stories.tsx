import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarNav, type SidebarNavItem } from './SidebarNav';

const items: SidebarNavItem[] = [
	{ id: 'dash', label: 'Dashboard', href: '#/' },
	{ id: 'plans', label: 'Plans', href: '#/plans' },
	{ id: 'cust', label: 'Customers', href: '#/customers' },
];

const meta = {
	title: 'Submission/Organisms/SidebarNav',
	component: SidebarNav,
	tags: ['autodocs'],
} as Meta<typeof SidebarNav>;

export default meta;
type Story = StoryObj<typeof meta>;

function SidebarNavDemo() {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<div className="h-64 border border-dashed border-border">
			<SidebarNav
				items={items}
				activeId="plans"
				collapsed={collapsed}
				onToggleCollapse={() => setCollapsed((c) => !c)}
			/>
		</div>
	);
}

export const Default: Story = {
	args: {} as never,
	render: () => <SidebarNavDemo />,
};
