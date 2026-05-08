import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { events } from '../../data/events'
import { fadeUp, staggerContainer } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'

const categoryStyles: Record<string, string> = {
  Workshop: 'border-cyan-500 text-cyan-300',
  Hackathon: 'border-violet-500 text-violet-300',
  Session: 'border-emerald-500 text-emerald-300',
  Sprint: 'border-orange-500 text-orange-300',
}

export const Events = () => {
  return (
    <section id="events" className="section-padding section-fade">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp} className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Upcoming Events</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Workshops, hackathons, and sessions designed to push your skills forward.
          </p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-2">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              variants={fadeUp}
              className={cn(
                'relative',
                index % 2 === 0
                  ? 'md:col-start-1 md:pr-12 md:text-right'
                  : 'md:col-start-2 md:pl-12'
              )}
            >
              <div
                className={cn(
                  'glass-card border-l-4 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-glow',
                  categoryStyles[event.category]
                )}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  {event.category}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white">{event.title}</h3>
                <p className="mt-2 font-mono text-xs text-[var(--text-muted)]">{event.date}</p>
                <p className="mt-4 text-sm text-[var(--text-secondary)]">{event.description}</p>
                <Button
                  variant="ghost"
                  className="group mt-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 text-white"
                >
                  Register
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
