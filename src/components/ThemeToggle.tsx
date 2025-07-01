import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    setIsLight(html.classList.contains('light'))
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle('light')
    setIsLight(!isLight)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2 rounded-full border border-[--color-border] bg-[--color-background] hover:bg-[--color-accent-soft] transition-colors"
    >
      {isLight ? (
        <Moon className="w-5 h-5 text-[--color-text]" />
      ) : (
        <Sun className="w-5 h-5 text-[--color-text]" />
      )}
    </button>
  )
}
