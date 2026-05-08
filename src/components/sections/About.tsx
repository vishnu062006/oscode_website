import { motion } from 'framer-motion'

import { features } from '../../data/features'
import { cardHover, fadeUp, staggerContainer } from '../../hooks/useScrollReveal'

export const About = () => {
  return (
    <section id="about" className="section-padding section-fade">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp} className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why Join OSCode?</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-violet-500 to-cyan-400" />
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Learn, ship, and collaborate with a crew that takes your skills from classroom to
            production.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={cardHover.whileHover}
                className="glass-card group relative flex flex-col gap-4 overflow-hidden p-6 transition-all duration-300 hover:border-violet-500/40"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-20 bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-cyan-400/20 blur-3xl" />
                </div>
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-glow`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative z-10 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="relative z-10 text-sm text-white/70">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
