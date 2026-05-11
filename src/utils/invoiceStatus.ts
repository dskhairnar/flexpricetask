export type InvoiceStatusKey = 'paid' | 'draft' | 'void' | 'open' | 'uncollectible';

const LABELS: Record<InvoiceStatusKey, string> = {
	paid: 'Paid',
	draft: 'Draft',
	void: 'Void',
	open: 'Open',
	uncollectible: 'Uncollectible',
};

/**
 * Maps raw invoice status strings (any casing) to a display label.
 */
export function invoiceStatusToLabel(status: string): string {
	const key = status.toLowerCase() as InvoiceStatusKey;
	return LABELS[key] ?? status;
}
