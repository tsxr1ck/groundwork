# ⚡ Groundwork

> A minimal, opinionated React boilerplate — beautifully configured so you can skip the setup and start building.

[![npm version](https://img.shields.io/npm/v/@tsxr1ck/create-groundwork)](https://www.npmjs.com/package/@tsxr1ck/create-groundwork)

---

## Quick Start

Scaffold a new project in seconds:

```bash
bun create @tsxr1ck/groundwork my-app
cd my-app
bun install
bunx --bun vite
```

Or scaffold into the current directory:

```bash
mkdir my-app && cd my-app
bun create @tsxr1ck/groundwork .
```

---

## What's Inside

| Tool | Purpose |
| --- | --- |
| [Vite](https://vite.dev/) | Lightning-fast dev server & build tool |
| [React 19](https://react.dev/) | UI library with the React Compiler enabled |
| [TypeScript](https://www.typescriptlang.org/) | Type safety out of the box |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Copy-paste accessible components |
| [React Router](https://reactrouter.com/) | Client-side routing |

---

## Project Structure

```
├── bin/cli.js              # CLI scaffolding script
├── src/
│   ├── components/ui/      # shadcn/ui components (Button, etc.)
│   ├── lib/                # Utilities (cn helper)
│   ├── pages/              # Route-level page components
│   │   ├── Home.tsx
│   │   └── Docs.tsx
│   ├── App.tsx             # Router setup
│   ├── main.tsx            # Entry point
│   └── index.css           # Tailwind config & theme tokens
├── index.html
├── vite.config.ts
└── package.json
```

---

## Commands

| Command | Description |
| --- | --- |
| `bunx --bun vite` | Start the dev server |
| `bun run build` | Build for production |
| `bun run preview` | Preview the production build |
| `bun run lint` | Run ESLint |

---

## Adding Components

This project ships with [shadcn/ui](https://ui.shadcn.com/). Add any component with one command:

```bash
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add dialog
bunx --bun shadcn@latest add card
```

Components are added to `src/components/ui/` — they're yours to customize.

---

## Alternative Install Methods

```bash
# Using bunx directly
bunx @tsxr1ck/create-groundwork my-app

# Install the CLI globally
bun install -g @tsxr1ck/create-groundwork
create-groundwork my-app
```

---

## License

MIT
