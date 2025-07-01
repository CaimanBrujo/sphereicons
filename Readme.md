# React + TypeScript + Vite + Tailwind CSS v4 Template

## Quick Start

```bash
npm install
npm run dev      # Start dev server
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## Stack Overview

- **React 19**
- **TypeScript 5.8**
- **Vite 6**
- **Tailwind CSS v4**
- **Lucide React (icons)**
- **ESLint 9**
- **Prettier 3**

---

## Project Structure

```
template-react-ts/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ThemeToggle.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitattributes
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── Readme.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Icons with Lucide

This template includes [Lucide](https://lucide.dev/icons) for using icons as React components.

Example usage:

```tsx
import { Sun, Moon } from 'lucide-react'
;<Sun className="w-5 h-5 text-[--color-text]" />
```

---

## Recommended VS Code Extensions

To get the best developer experience:

- **ESLint** – by Dirk Baeumer
- **Prettier – Code formatter** – by Prettier
- **Tailwind CSS IntelliSense** – by Tailwind Labs
- **PostCSS Language Support** – by csstools
- **Lucide Icons (optional preview)** – by Lucide.dev

---
