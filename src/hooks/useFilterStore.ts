import { useCallback, useMemo } from 'react';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type FilterRecord = Record<string, unknown>;

type FilterState = {
	byRoute: Record<string, FilterRecord>;
	setFilter: (routeKey: string, key: string, value: unknown) => void;
	resetFilters: (routeKey: string) => void;
	getFilters: (routeKey: string) => FilterRecord;
};

const storage = createJSONStorage(() => sessionStorage);

/**
 * Session-persisted filter bag per logical page (`routeKey`), e.g. `filters:invoices`.
 * Extend with URL fingerprint sync in your DataTable stories (Challenge A).
 */
export const useFilterStore = create<FilterState>()(
	persist(
		(set, get) => ({
			byRoute: {},
			setFilter: (routeKey, key, value) =>
				set((s) => ({
					byRoute: {
						...s.byRoute,
						[routeKey]: { ...s.byRoute[routeKey], [key]: value },
					},
				})),
			resetFilters: (routeKey) =>
				set((s) => {
					const next = { ...s.byRoute };
					delete next[routeKey];
					return { byRoute: next };
				}),
			getFilters: (routeKey) => get().byRoute[routeKey] ?? {},
		}),
		{ name: 'dsk-filters', storage }
	)
);

/** Hook facade for components */
export function useFiltersForRoute(routeKey: string) {
	const setFilter = useFilterStore((s) => s.setFilter);
	const resetFilters = useFilterStore((s) => s.resetFilters);
	const filters = useFilterStore((s) => s.byRoute[routeKey] ?? {});

	const set = useCallback(
		(key: string, value: unknown) => setFilter(routeKey, key, value),
		[routeKey, setFilter]
	);

	const reset = useCallback(() => resetFilters(routeKey), [routeKey, resetFilters]);

	return useMemo(() => ({ filters, setFilter: set, resetFilters: reset }), [filters, reset, set]);
}
