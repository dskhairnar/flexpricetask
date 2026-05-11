import { describe, expect, it } from 'vitest';
import { invoiceStatusToLabel } from './invoiceStatus';

describe('invoiceStatusToLabel', () => {
	it('maps known statuses case-insensitively', () => {
		expect(invoiceStatusToLabel('PAID')).toBe('Paid');
		expect(invoiceStatusToLabel('draft')).toBe('Draft');
	});

	it('falls back to raw string', () => {
		expect(invoiceStatusToLabel('custom')).toBe('custom');
	});
});
