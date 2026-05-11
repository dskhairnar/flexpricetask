/**
 * Formats a numeric amount as a localized currency string.
 */
export function formatCurrency(amount: number, currencyCode = 'USD', locale = 'en-US'): string {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currencyCode,
	}).format(amount);
}
