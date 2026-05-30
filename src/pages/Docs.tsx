import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Docs() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4">
          <Button asChild variant="ghost" className="-ml-4 mb-4 text-muted-foreground hover:text-foreground">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-extrabold tracking-tight">Documentation</h1>
          <p className="text-xl text-muted-foreground">Everything you need to know about this boilerplate.</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Tech Stack</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
            <li><strong className="text-foreground">Vite</strong> - Next Generation Frontend Tooling</li>
            <li><strong className="text-foreground">React</strong> - A JavaScript library for building user interfaces</li>
            <li><strong className="text-foreground">Tailwind CSS (v4)</strong> - A utility-first CSS framework</li>
            <li><strong className="text-foreground">shadcn/ui</strong> - Beautifully designed components that you can copy and paste</li>
            <li><strong className="text-foreground">React Router</strong> - Declarative routing for React</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Getting Started</h2>
          <p className="text-muted-foreground">Start the development server with:</p>
          <div className="p-4 rounded-lg bg-muted border font-mono text-sm">
            bunx --bun vite
          </div>
          <p className="text-muted-foreground">Build for production:</p>
          <div className="p-4 rounded-lg bg-muted border font-mono text-sm">
            bun run build
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Adding Components</h2>
          <p className="text-muted-foreground">This project uses shadcn/ui. To add new components, run:</p>
          <div className="p-4 rounded-lg bg-muted border font-mono text-sm">
            bunx --bun shadcn@latest add [component-name]
          </div>
          <p className="text-muted-foreground">For example, to add a dialog:</p>
          <div className="p-4 rounded-lg bg-muted border font-mono text-sm">
            bunx --bun shadcn@latest add dialog
          </div>
        </section>

      </div>
    </div>
  )
}
