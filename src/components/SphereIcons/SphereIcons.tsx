import type { IconType } from './icons'
import { defaultIcons } from './icons'
import { useSphereAnimation } from './useSphereAnimation'

interface SphereIconsProps {
  icons?: IconType[]
  radius?: number
  size?: number
  iconSize?: number
  className?: string
}

export default function SphereIcons({
  icons = defaultIcons,
  radius = 150,
  size = 400,
  iconSize = 32,
  className = ''
}: SphereIconsProps) {
  const { containerRef } = useSphereAnimation(icons.length, radius)

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <div
        ref={containerRef}
        className={`absolute inset-0 flex items-center justify-center ${className}`}
      >
        {icons.map((Icon, index) => (
          <Icon
            key={index}
            className="absolute text-accent transition-transform duration-100"
            style={{ width: iconSize, height: iconSize }}
          />
        ))}
      </div>
    </div>
  )
}

export type { IconType } from './icons'
