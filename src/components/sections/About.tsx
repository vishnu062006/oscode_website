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
          <h2 className="text-3xl font-semibold md:text-4xl">Why Join OSCode?</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
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
                className="glass-card group relative flex flex-col gap-4 p-6 transition-all duration-300 hover:border-violet-500/40"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-glow`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
