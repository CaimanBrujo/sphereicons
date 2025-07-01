import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="w-full bg-[--color-background] text-[--color-text] py-4 px-6 border-b border-[--color-border] flex items-center">
      <div className="flex-1" />

      <h1 className="text-xl font-semibold">React + Vite + Tailwind CSS</h1>

      <div className="flex-1 flex justify-end">
        <ThemeToggle />
      </div>
    </header>
  )
}
