import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed top-4 right-4 z-50 size-9 rounded-xl"
    >
      {theme === "light" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}

export { ThemeToggle }
