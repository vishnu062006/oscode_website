import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const HOVER_SCALE = 1.65

export const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 90, damping: 20, mass: 0.8 })
  const ringY = useSpring(y, { stiffness: 90, damping: 20, mass: 0.8 })
  const dotX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 })
  const dotY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 })
  const scale = useMotionValue(1)
  const scaleSpring = useSpring(scale, { stiffness: 300, damping: 24 })

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')
    if (!media.matches) return
    setEnabled(true)

    const updatePosition = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    const updateHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const isInteractive = Boolean(target?.closest('a, button, [data-cursor="hover"]'))
      scale.set(isInteractive ? HOVER_SCALE : 1)
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', updateHover)
    window.addEventListener('mouseout', updateHover)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', updateHover)
      window.removeEventListener('mouseout', updateHover)
    }
  }, [scale, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div className="custom-cursor-ring" style={{ x: ringX, y: ringY, scale: scaleSpring }} />
      <motion.div className="custom-cursor-dot" style={{ x: dotX, y: dotY }} />
    </>
  )
}
