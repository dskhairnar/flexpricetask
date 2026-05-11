import type { UseQueryOptions } from '@tanstack/react-query';

export const QUERY_PRESETS = {
	REALTIME: { staleTime: 0, gcTime: 5 * 60 * 1000 },
	DEFAULT: { staleTime: 5 * 60 * 1000, gcTime: 10 * 60 * 1000 },
	STATIC: { staleTime: 30 * 60 * 1000, gcTime: 60 * 60 * 1000 },
} as const;

type QueryKey = readonly unknown[];

/**
 * Merges FlexPrice-style global defaults with per-call-site overrides.
 * Use presets for consistent caching across the app.
 */
export function createQueryConfig<TQueryFnData = unknown, TError = Error, TData = TQueryFnData>(
	overrides: Partial<Pick<UseQueryOptions<TQueryFnData, TError, TData, QueryKey>, 'staleTime' | 'gcTime'>> = {}
): Pick<UseQueryOptions<TQueryFnData, TError, TData, QueryKey>, 'staleTime' | 'gcTime'> {
	return {
		staleTime: QUERY_PRESETS.DEFAULT.staleTime,
		gcTime: QUERY_PRESETS.DEFAULT.gcTime,
		...overrides,
	};
}
