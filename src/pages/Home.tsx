import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-12 text-center">
        
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4">
            Groundwork Boilerplate
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
            Build Faster.
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto leading-relaxed">
            A minimal, beautifully designed boilerplate to kickstart your next big idea. Powered by Vite, React, and shadcn/ui.
          </p>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-sm hover:shadow-md transition-all">
            Get Started
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 text-base shadow-sm hover:shadow-md transition-all bg-background hover:bg-muted">
            <Link to="/docs">View Documentation</Link>
          </Button>
        </div>
        
        {/* Features Grid */}
        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="group space-y-3 p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/50">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="font-semibold text-lg tracking-tight">Vite Powered</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Lightning fast HMR and highly optimized production builds out of the box.</p>
          </div>
          
          <div className="group space-y-3 p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/50">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h3 className="font-semibold text-lg tracking-tight">Shadcn UI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Beautifully designed, accessible components that you can fully customize.</p>
          </div>
          
          <div className="group space-y-3 p-6 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/50">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
            </div>
            <h3 className="font-semibold text-lg tracking-tight">Tailwind CSS</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Utility-first CSS framework for rapid, responsive UI development.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
