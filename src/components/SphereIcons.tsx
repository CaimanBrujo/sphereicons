// SphereIcons.tsx
import { useRef, useEffect } from 'react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { LucideProps } from 'lucide-react'
import {
  Github,
  Figma,
  Linkedin,
  Twitter,
  Chrome,
  Code,
  Mail,
  PenTool,
  Zap,
  Music,
  Cloud,
  Cpu,
  Eye,
  Camera,
  Video,
  Wifi,
  Phone,
  Heart,
  Star
} from 'lucide-react'

type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>

type Vec3 = { x: number; y: number; z: number }

const icons: IconType[] = [
  Github,
  Figma,
  Linkedin,
  Twitter,
  Chrome,
  Code,
  Mail,
  PenTool,
  Zap,
  Music,
  Cloud,
  Cpu,
  Eye,
  Camera,
  Video,
  Wifi,
  Phone,
  Heart,
  Star
]

export default function SphereIcons() {
  const containerRef = useRef<HTMLDivElement>(null)
  const positions = useRef<Vec3[]>([])
  const rotation = useRef<Vec3>({ x: 0, y: 0, z: 0 })
  const velocity = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const dragging = useRef(false)
  const lastMouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const requestRef = useRef<number>(0)

  const radius = 150
  const iconCount = icons.length

  const rotateX = (pos: Vec3, angle: number): Vec3 => {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    return {
      x: pos.x,
      y: pos.y * cos - pos.z * sin,
      z: pos.y * sin + pos.z * cos
    }
  }

  const rotateY = (pos: Vec3, angle: number): Vec3 => {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    return {
      x: pos.z * sin + pos.x * cos,
      y: pos.y,
      z: pos.z * cos - pos.x * sin
    }
  }

  const project = (pos: Vec3) => {
    const scale = 0.5 + pos.z / (2 * radius)
    return {
      x: pos.x * scale,
      y: pos.y * scale,
      scale
    }
  }

  const draw = () => {
    if (!containerRef.current) return
    const children = Array.from(containerRef.current.children) as HTMLElement[]
    positions.current.forEach((pos, i) => {
      let rotated = rotateX(pos, rotation.current.x)
      rotated = rotateY(rotated, rotation.current.y)
      const projected = project(rotated)

      const icon = children[i]
      if (!icon) return
      icon.style.transform = `translate(${projected.x}px, ${projected.y}px) scale(${projected.scale})`
      icon.style.zIndex = `${Math.floor(projected.scale * 100)}`
      icon.style.opacity = `${projected.scale}`
    })
  }

  const animate = () => {
    rotation.current.x += velocity.current.y
    rotation.current.y += velocity.current.x
    velocity.current.x *= 0.95
    velocity.current.y *= 0.95
    draw()
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const step = Math.PI * (3 - Math.sqrt(5))
    const offset = 2 / iconCount
    const newPositions: Vec3[] = []

    for (let i = 0; i < iconCount; i++) {
      const y = i * offset - 1 + offset / 2
      const r = Math.sqrt(1 - y * y)
      const phi = i * step
      const x = Math.cos(phi) * r
      const z = Math.sin(phi) * r
      newPositions.push({ x: x * radius, y: y * radius, z: z * radius })
    }

    positions.current = newPositions
    requestRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(requestRef.current)
  })

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      dragging.current = true
      const x =
        'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX
      const y =
        'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY
      lastMouse.current = { x, y }
    }

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return
      const x =
        'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX
      const y =
        'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY
      const dx = x - lastMouse.current.x
      const dy = y - lastMouse.current.y
      velocity.current = {
        x: dx * 0.005,
        y: dy * 0.005
      }
      lastMouse.current = { x, y }
    }

    const handleMouseUp = () => {
      dragging.current = false
    }

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    window.addEventListener('touchstart', handleMouseDown)
    window.addEventListener('touchmove', handleMouseMove)
    window.addEventListener('touchend', handleMouseUp)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)

      window.removeEventListener('touchstart', handleMouseDown)
      window.removeEventListener('touchmove', handleMouseMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [])

  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        {icons.map((Icon, index) => (
          <Icon
            key={index}
            className="absolute w-8 h-8 text-accent transition-transform duration-100"
          />
        ))}
      </div>
    </div>
  )
}
