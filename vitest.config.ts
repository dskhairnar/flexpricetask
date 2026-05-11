import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	root: dirname,
	plugins: [react()],
	test: {
		globals: false,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{ts,tsx}'],
		setupFiles: [path.resolve(dirname, 'src/tests/setup.ts')],
	},
	resolve: {
		alias: {
			'@': path.resolve(dirname, 'src'),
		},
	},
});
