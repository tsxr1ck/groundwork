# Groundwork Boilerplate

A minimal, beautifully designed boilerplate to kickstart your next big idea. 

Built with:
- **[Vite](https://vite.dev/)** - Next Generation Frontend Tooling
- **[React](https://react.dev/)** - A JavaScript library for building user interfaces
- **[Tailwind CSS (v4)](https://tailwindcss.com/)** - A utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed, accessible components
- **[React Router](https://reactrouter.com/)** - Declarative routing for React

## Scaffolding a New Project

You can instantly scaffold a new project anywhere on your computer using `bun create`:

```bash
bun create @tsxr1ck/groundwork my-new-app
```
*(Alternatively, you can run `bunx @tsxr1ck/create-groundwork my-new-app` or install the CLI globally via `bun install -g @tsxr1ck/create-groundwork`)*

## Getting Started

First, ensure you have [Bun](https://bun.sh/) installed.

### Install Dependencies

```bash
bun install
```

### Start Development Server

```bash
bunx --bun vite
```
Then open your browser and visit `http://localhost:5173/`.

### Build for Production

```bash
bun run build
```

## Adding Components

This boilerplate uses `shadcn/ui` for its component system. You can easily add new components using the CLI:

```bash
bunx --bun shadcn@latest add [component-name]
```

For example, to add a dialog component:

```bash
bunx --bun shadcn@latest add dialog
```

## Directory Structure

- `src/components/ui/` - Contains the `shadcn/ui` components (e.g. Button, Dialog, etc.)
- `src/pages/` - Contains the page-level components (Home, Docs)
- `src/App.tsx` - The main application entry point and router setup
- `src/index.css` - Global CSS containing the Tailwind imports and the theme variables

## Documentation

Once you start the development server, you can view the built-in documentation by clicking "View Documentation" on the landing page, or by navigating directly to `/docs`.
