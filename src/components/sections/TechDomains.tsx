import { motion } from 'framer-motion'

import { domains } from '../../data/domains'
import { fadeUp, staggerContainer } from '../../hooks/useScrollReveal'

const DomainCard = ({ title, summary, highlights, icon: Icon }: (typeof domains)[number]) => (
  <div className="glass-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="absolute -inset-20 bg-gradient-to-r from-violet-500/20 via-blue-500/10 to-cyan-400/20 blur-3xl" />
    </div>
    <div className="relative z-10 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-white/70">{summary}</p>
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
        {highlights.join(' · ')}
      </p>
    </div>
  </div>
)

export const TechDomains = () => {
  return (
    <section id="domains" className="section-padding section-fade">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp} className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">What We Build</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Ship with modern stacks across engineering, design, and open-source domains.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <motion.div key={domain.title} variants={fadeUp}>
              <DomainCard {...domain} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
