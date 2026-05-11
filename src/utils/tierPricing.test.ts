import { describe, expect, it } from 'vitest';
import { graduatedTierTotal } from './tierPricing';

describe('graduatedTierTotal', () => {
	it('sums tiers for partial usage', () => {
		const tiers = [
			{ upToUnits: 100, unitPrice: 1 },
			{ upToUnits: 200, unitPrice: 0.5 },
		];
		expect(graduatedTierTotal(150, tiers)).toBe(100 * 1 + 50 * 0.5);
	});

	it('returns zero for empty tiers', () => {
		expect(graduatedTierTotal(50, [])).toBe(0);
	});
});
