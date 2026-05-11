import { describe, expect, it } from 'vitest';
import { QUERY_PRESETS, createQueryConfig } from './createQueryConfig';

describe('createQueryConfig', () => {
	it('applies default stale and gc times', () => {
		const c = createQueryConfig();
		expect(c.staleTime).toBe(QUERY_PRESETS.DEFAULT.staleTime);
		expect(c.gcTime).toBe(QUERY_PRESETS.DEFAULT.gcTime);
	});

	it('allows overrides', () => {
		const c = createQueryConfig({ staleTime: 0, gcTime: 60_000 });
		expect(c.staleTime).toBe(0);
		expect(c.gcTime).toBe(60_000);
	});
});
