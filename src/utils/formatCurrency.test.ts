import { describe, expect, it } from 'vitest';
import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
	it('formats USD', () => {
		expect(formatCurrency(1234.5, 'USD')).toMatch(/1,234\.50/);
	});

	it('respects currency code', () => {
		expect(formatCurrency(10, 'EUR', 'de-DE')).toContain('10');
	});
});
