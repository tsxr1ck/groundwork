import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Docs from "./pages/Docs"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
