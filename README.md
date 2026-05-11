# FlexPrice take-home — component library (Storybook)

Standalone package: React, TypeScript, Tailwind, Storybook, Vitest. UI patterns are inspired by [flexprice-front](https://github.com/flexprice/flexprice-front); this implementation is original to the submission.

## Commands

```bash
npm install
npm run storybook          # http://localhost:6006
npm run build-storybook    # output: ./storybook-static
npm run test:run
npm run typecheck
```

## Deploy on Vercel (Storybook static)

1. Push this folder as its own Git repository **or** keep it in a monorepo.
2. In Vercel → New Project → import the repo.
3. Set **Root Directory** to `dskSubmission` (if the repo is the parent monorepo).
4. Vercel reads `vercel.json`: build `npm run build-storybook`, publish `storybook-static`.
5. No server needed; the site is static files only.

If you prefer the dashboard over `vercel.json`: Framework Preset **Other**, Build Command `npm run build-storybook`, Output Directory `storybook-static`.
