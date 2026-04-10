---
name: copilot-instructions
description: "Project-wide guidance for CasaviejaWebsiteCode: Vite + React + Tailwind website deployed with Cloudflare Wrangler."
---

# CasaviejaWebsiteCode Workspace Instructions

## What this project is
- A single-page React website built with Vite, React, TypeScript, Tailwind CSS, and Cloudflare Workers.
- Deployed with `wrangler` using `wrangler.jsonc` and the `@cloudflare/vite-plugin` plugin.
- The page is composed from reusable section components under `src/app/components`.

## Key project files
- `src/main.tsx` — application bootstrap.
- `src/app/App.tsx` — top-level page layout and section composition.
- `src/app/components/` — content sections and page UI.
- `src/app/components/ui/` — shared UI primitives and component wrappers.
- `src/styles/` — global stylesheet files including `index.css`, `tailwind.css`, and `theme.css`.
- `vite.config.ts` — Vite config, alias `@` to `./src`, asset handling, Tailwind, React, and Cloudflare plugin.
- `wrangler.jsonc` — Cloudflare Workers deployment config, SPA asset handling.
- `package.json` — scripts, dependencies, and package metadata.

## Recommended commands
- `npm install` — install dependencies.
- `npm run dev` — start the Vite development server.
- `npm run build` — build production output.
- `npm run preview` — build and preview locally via Wrangler.
- `npm run deploy` — build and deploy with Wrangler.

## What to change where
- Content and visual sections: update components in `src/app/components/`.
- Page structure / order: update `src/app/App.tsx`.
- Global style rules: update `src/styles/index.css`, `src/styles/tailwind.css`, or `src/styles/theme.css`.
- Static assets: add or update files in `src/assets/`.
- Build and deployment settings: update `vite.config.ts`, `wrangler.jsonc`, or `package.json`.

## Project conventions
- The repository is structured as a single React app, not a folder-per-page routing app.
- There is no active `src/app/pages` directory in the current source tree despite the README reference.
- Prefer composable UI section components rather than embedding large page markup in one file.
- Use `@/...` imports for source files under `src` when appropriate.
- This app uses Tailwind CSS utility classes plus component-based styling.

## Deployment notes
- This repository is deployed as a Cloudflare Workers-powered site.
- `wrangler.jsonc` uses `assets.not_found_handling: "single-page-application"`, so client-side navigation is expected.
- `vite.config.ts` includes `@cloudflare/vite-plugin`, so local dev and build integrate with Cloudflare asset handling.

## How to help an AI agent
- Use this file as the primary workspace guidance for project structure, scripts, and deployment.
- Focus on `src/app/App.tsx` and `src/app/components/` for most content or UI changes.
- Prefer small, section-based edits over adding unrelated new architecture.
- If the existing README appears outdated, follow the actual source tree and file structure.

## Example prompts
- "Update the hero text in `src/app/components/Hero.tsx` and keep the layout intact."
- "Add a new FAQ section below the existing Gallery section in `src/app/App.tsx`."
- "Explain how to change the color palette in this Tailwind-based site."
