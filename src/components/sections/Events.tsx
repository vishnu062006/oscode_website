import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { events } from '../../data/events'
import { fadeUp, staggerContainer } from '../../hooks/useScrollReveal'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'

const categoryStyles: Record<string, string> = {
  Workshop: 'border-cyan-400/40 text-cyan-300',
  Hackathon: 'border-violet-400/40 text-violet-300',
  Session: 'border-emerald-400/40 text-emerald-300',
  Sprint: 'border-orange-400/40 text-orange-300',
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
                  'glass-card group relative overflow-hidden border-l-4 p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/60 hover:shadow-[0_30px_80px_rgba(15,23,42,0.45)]',
                  categoryStyles[event.category]
                )}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-24 bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-cyan-400/20 blur-3xl" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                    <span>{event.category}</span>
                    <span className="font-mono text-[11px] text-white/60">{event.date}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{event.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{event.description}</p>
                  <Button
                    variant="ghost"
                    className="group mt-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 text-white/90 hover:border-white/30"
                    data-cursor="hover"
                  >
                    Register
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
