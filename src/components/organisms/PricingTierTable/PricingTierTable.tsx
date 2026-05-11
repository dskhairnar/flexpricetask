import type { PriceTier } from '../../../utils/tierPricing';
import { formatCurrency } from '../../../utils/formatCurrency';

export interface PricingTierTableProps {
	tiers: PriceTier[];
	currencyCode?: string;
}

/**
 * Read-only graduated pricing ladder for plan setup UIs.
 */
export function PricingTierTable({ tiers, currencyCode = 'USD' }: PricingTierTableProps) {
	let start = 0;
	return (
		<table className="w-full max-w-lg text-sm">
			<thead className="text-left text-muted-foreground">
				<tr>
					<th className="py-2">From (units)</th>
					<th className="py-2">Up to (units)</th>
					<th className="py-2">Price / unit</th>
				</tr>
			</thead>
			<tbody>
				{tiers.map((t, i) => {
					const from = start;
					const up = t.upToUnits;
					start = up;
					return (
						<tr key={i} className="border-t border-border">
							<td className="py-2">{from + 1}</td>
							<td className="py-2">{up}</td>
							<td className="py-2 font-medium">{formatCurrency(t.unitPrice, currencyCode)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
