import React, { useRef, useEffect } from 'react'

export function useDragAndHover(containerRef: React.RefObject<HTMLElement>) {
  const dragging = useRef(false)
  const hovering = useRef(false)
  const lastMouse = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const containerCenter = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    containerCenter.current = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    }
  }, [containerRef])

  const getXY = (e: MouseEvent | TouchEvent) => {
    if ('touches' in e)
      return { x: e.touches[0].clientX, y: e.touches[0].clientY }
    return { x: e.clientX, y: e.clientY }
  }

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      dragging.current = true
      lastMouse.current = getXY(e)
    }

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return

      const { x, y } = getXY(e)

      const dxCenter = x - containerCenter.current.x
      const dyCenter = y - containerCenter.current.y
      const distCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter)

      const maxDist =
        Math.sqrt(
          containerRef.current.offsetWidth ** 2 +
            containerRef.current.offsetHeight ** 2
        ) / 2

      const speedMultiplier = Math.min(distCenter / maxDist, 1)

      if (!dragging.current) {
        velocity.current.x = speedMultiplier * 0.02
        velocity.current.y = speedMultiplier * 0.02
      } else {
        const dx = x - lastMouse.current.x
        const dy = y - lastMouse.current.y
        velocity.current.x = dx * 0.005
        velocity.current.y = dy * 0.005
        lastMouse.current = { x, y }
      }
    }

    const handleMouseUp = () => {
      dragging.current = false
    }

    const handleMouseEnter = () => {
      hovering.current = true
    }

    const handleMouseLeave = () => {
      hovering.current = false
    }

    const container = containerRef.current
    if (!container) return

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchstart', handleMouseDown)
    window.addEventListener('touchmove', handleMouseMove)
    window.addEventListener('touchend', handleMouseUp)

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchstart', handleMouseDown)
      window.removeEventListener('touchmove', handleMouseMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [containerRef])

  return { dragging, hovering, velocity }
}
