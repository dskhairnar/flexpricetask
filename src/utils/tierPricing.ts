export interface PriceTier {
	upToUnits: number;
	unitPrice: number;
}

/**
 * Computes total cost for `usageUnits` under graduated (tiered) pricing.
 * Each tier applies only to units within that tier's band (up to `upToUnits`, cumulative).
 */
export function graduatedTierTotal(usageUnits: number, tiers: PriceTier[]): number {
	if (usageUnits <= 0 || tiers.length === 0) return 0;

	let remaining = usageUnits;
	let previousCeiling = 0;
	let total = 0;

	for (const tier of tiers) {
		const tierWidth = Math.max(0, tier.upToUnits - previousCeiling);
		const unitsInTier = Math.min(remaining, tierWidth);
		total += unitsInTier * tier.unitPrice;
		remaining -= unitsInTier;
		previousCeiling = tier.upToUnits;
		if (remaining <= 0) break;
	}

	return total;
}
