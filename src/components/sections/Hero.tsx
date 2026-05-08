import type { MouseEvent, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { cn } from '../../lib/utils'
import { Badge } from '../ui/badge'
import { Button, buttonVariants } from '../ui/button'
import { fadeUp, staggerContainer } from '../../hooks/useScrollReveal'

const MagneticButton = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 16, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 150, damping: 16, mass: 0.2 })

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2
    x.set(offsetX * 0.25)
    y.set(offsetY * 0.25)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      type="button"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        buttonVariants({ size: 'lg' }),
        'button-shimmer group relative overflow-hidden bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 text-white shadow-[0_20px_60px_rgba(59,130,246,0.35)] transition-all hover:scale-[1.02]',
        className
      )}
      style={{ x: springX, y: springY }}
      data-cursor="hover"
    >
      <span className="relative z-10 flex items-center">
        {children}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </motion.button>
  )
}

const HeroVisual = () => (
  <motion.div
    variants={fadeUp}
    className="relative mx-auto w-full max-w-md lg:max-w-lg"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-r from-violet-500/20 via-blue-500/10 to-cyan-400/20 blur-2xl" />
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex items-center gap-2 text-xs text-white/60">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono uppercase tracking-[0.3em] text-white/40">
          OSCode Terminal
        </span>
      </div>
      <div className="mt-6 space-y-3 font-mono text-xs text-white/70">
        <div className="flex items-center gap-2">
          <span className="text-cyan-300">$</span> npx oscode init
        </div>
        <div className="flex items-center gap-2 text-white/50">
          <span className="text-cyan-300">$</span> fetching community modules...
        </div>
        <div className="flex items-center gap-2">
          <span className="text-cyan-300">$</span> launching build sprint
          <span className="ml-1 inline-block h-3 w-2 animate-pulse bg-cyan-300/80" />
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/40">
          <span>Live Contributions</span>
          <span className="text-cyan-300">+42%</span>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-1">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={`bar-${index}`}
              className="h-6 rounded-md bg-gradient-to-t from-blue-500/20 to-cyan-400/60 opacity-70"
              style={{ height: `${12 + (index % 6) * 4}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

export const Hero = () => {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-radial from-[var(--glow-purple)] via-transparent to-transparent blur-3xl" />
      <div className="absolute right-[-160px] top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[140px] animate-float-slow" />
      <div className="absolute left-[-160px] bottom-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px] animate-pulse-glow" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col items-center justify-center px-6 py-20 md:px-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:text-left">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <Badge className="rounded-full border-violet-500/40 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.3em] text-white/80 shadow-glow">
              ✦ Open Source · Developer Community
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Build. Collaborate.
            <br />
            <span className="gradient-text">Innovate.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            OSCode Club is where developers come together to contribute to open source, build real
            products, and grow into the engineers who ship the future.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <MagneticButton>Start Building</MagneticButton>
            <Button
              size="lg"
              variant="outline"
              className="button-shimmer border-white/15 bg-transparent text-white/80 hover:border-white/40 hover:text-white"
              data-cursor="hover"
            >
              Explore Community
            </Button>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  )
}
