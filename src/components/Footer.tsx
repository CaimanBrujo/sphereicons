import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-background text-muted py-6 px-6 border-t border-border mt-auto">
      <p className="text-sm text-center flex items-center justify-center gap-2">
        © {new Date().getFullYear()} Template |
        <a
          href="https://github.com/CaimanBrujo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-title text-muted"
        >
          <Github className="w-4 h-4" />
          Caiman Brujo
        </a>{' '}
        | All rights reserved.
      </p>
    </footer>
  )
}
