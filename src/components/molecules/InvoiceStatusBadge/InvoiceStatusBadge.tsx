import { Badge, type BadgeTone } from '../../atoms/Badge';
import { invoiceStatusToLabel } from '../../../utils/invoiceStatus';

export interface InvoiceStatusBadgeProps {
	status: string;
}

function toneForStatus(s: string): BadgeTone {
	const k = s.toLowerCase();
	if (k === 'paid') return 'success';
	if (k === 'draft') return 'warning';
	if (k === 'void' || k === 'uncollectible') return 'destructive';
	return 'muted';
}

/**
 * Maps invoice status strings to coloured chips (FlexPrice-style semantics).
 */
export function InvoiceStatusBadge({ status }: InvoiceStatusBadgeProps) {
	return <Badge tone={toneForStatus(status)}>{invoiceStatusToLabel(status)}</Badge>;
}
