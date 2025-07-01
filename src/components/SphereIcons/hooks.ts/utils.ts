import type { Vec3 } from '../types'

export function rotateX(pos: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  return {
    x: pos.x,
    y: pos.y * cos - pos.z * sin,
    z: pos.y * sin + pos.z * cos
  }
}

export function rotateY(pos: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  return {
    x: pos.z * sin + pos.x * cos,
    y: pos.y,
    z: pos.z * cos - pos.x * sin
  }
}

export function project(pos: Vec3, radius: number) {
  const scale = 0.5 + pos.z / (2 * radius)
  return {
    x: pos.x * scale,
    y: pos.y * scale,
    scale
  }
}
