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
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { LucideProps } from 'lucide-react'

export type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>

export const defaultIcons: IconType[] = [
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
