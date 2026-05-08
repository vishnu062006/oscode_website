import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { heroBadges } from '../../data/hero'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { fadeUp, staggerContainer } from '../../hooks/useScrollReveal'

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.6,
      speed: Math.random() * 0.3 + 0.1,
    }))

    let frame = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(255,255,255,0.5)'
      particles.forEach((particle) => {
        particle.y -= particle.speed
        if (particle.y < 0) particle.y = canvas.height
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })
      frame = window.requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-30"
      aria-hidden="true"
    />
  )
}

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-radial from-[var(--glow-purple)] via-transparent to-transparent blur-3xl" />
      <div className="absolute right-[-200px] top-20 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px] animate-float" />
      <div className="absolute left-[-120px] bottom-16 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px] animate-float-slow" />
      <div className="absolute right-[15%] bottom-10 h-60 w-60 rounded-full bg-cyan-500/20 blur-[100px] animate-pulse-glow" />
      <ParticleField />

      {heroBadges.map((badge) => (
        <div
          key={badge.label}
          className={`absolute hidden items-center rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur md:inline-flex ${badge.color} ${badge.className} animate-float`}
        >
          {badge.label}
        </div>
      ))}

      <div className="relative z-10 section-padding flex flex-col items-center text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="flex justify-center">
            <Badge className="rounded-full border-violet-500/40 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.3em] text-white/80 shadow-glow">
              ✦ Open Source · Developer Community
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl"
          >
            Build. Collaborate.
            <br />
            <span className="gradient-text">Innovate.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)] md:text-xl"
          >
            OSCode Club is where developers come together — to contribute to open source, build
            real projects, and grow as engineers.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="button-shimmer bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-glow hover:scale-105"
            >
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="button-shimmer border-white/20 bg-transparent text-white hover:bg-white/5"
            >
              Explore Community
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
