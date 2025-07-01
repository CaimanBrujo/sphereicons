# SphereIcons Component

## Introduction

SphereIcons is a React component that displays an animated 3D sphere with SVG icons (from the lucide-react library) arranged evenly on its surface. The icons slowly rotate, increasing rotation speed based on the cursor's distance from the sphere center. Manual drag rotation is also supported for free exploration.

This component is designed to be integrated into React projects using TypeScript and Tailwind CSS, offering an attractive and customizable visual experience.

---

## Prerequisites

Before using SphereIcons, ensure you have:

- A React project with TypeScript support (React 18+ recommended).
- Tailwind CSS v4 configured for styling.
- The `lucide-react` dependency installed for SVG icons.

If you don't have Tailwind or lucide-react installed, install them via:

```bash
npm install tailwindcss lucide-react
# or
yarn add tailwindcss lucide-react
```

---

## Project Structure

The `SphereIcons` folder contains:

```
SphereIcons/
├── icons.ts              # Array with Lucide icons used
├── types.ts              # TypeScript type definitions (e.g. Vec3)
├── utils.ts              # Pure functions for 3D rotation and projection
├── useDragAndHover.ts    # Hook handling mouse/touch events and velocity calculation
├── useSphereAnimation.ts # Hook controlling animation and visual updates
└── SphereIcons.tsx       # Visual component rendering the sphere and icons
```

---

## Installation and Usage

1. Copy the `SphereIcons` folder into your React project's components directory.

2. Ensure required dependencies are installed:

```bash
npm install tailwindcss lucide-react
```

3. Import and use the component anywhere in your app:

```tsx
import SphereIcons from './components/SphereIcons/SphereIcons'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <SphereIcons />
    </div>
  )
}

export default App
```

---

## Component Props

| Prop       | Type   | Default | Description                              |
| ---------- | ------ | ------- | ---------------------------------------- |
| `radius`   | number | 150     | Sphere radius in pixels                  |
| `size`     | number | 400     | Container div width and height in pixels |
| `iconSize` | number | 32      | Width and height of each icon in pixels  |

Example with custom props:

```tsx
<SphereIcons radius={200} size={500} iconSize={48} />
```

---

## Customization

### Icon Color

Icon colors are controlled via Tailwind CSS classes, defaulting to `text-accent`. Change colors by:

- Modifying the `text-accent` class in your Tailwind config or CSS
- Overriding the icon's `className` prop in `SphereIcons.tsx`

Example changing to blue:

```tsx
<Icon className="absolute w-8 h-8 text-blue-500 transition-transform duration-100" />
```

### Rotation Speed

Adjust slow auto-rotation speed by editing the `baseRotationSpeed` constant inside `useSphereAnimation.ts`.

Control max speed caused by mouse movement by adjusting multipliers in `useDragAndHover.ts`.

### Replacing Icons

Replace icons by editing the `icons` array in `icons.ts` with your own React SVG components.

Example:

```tsx
import MyCustomIcon from './MyCustomIcon'

export const icons = [
  MyCustomIcon
  // more icons...
]
```

---

## Integration Notes

- Ensure Tailwind CSS is properly configured to style the component.
- The component uses global mouse and touch listeners; make sure they do not conflict with your app's event handlers.
- Wrap the component in a container to control layout and sizing as needed.

---

## Full Example

```tsx
import SphereIcons from './components/SphereIcons/SphereIcons'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900">
      <SphereIcons radius={180} size={450} iconSize={40} />
    </main>
  )
}
```

---

## Contributing

Contributions and suggestions welcome! Open issues or pull requests for bug fixes, feature requests, or improvements.
