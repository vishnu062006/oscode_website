import { motion } from 'framer-motion'

import { domains } from '../../data/domains'
import { fadeUp, staggerContainer } from '../../hooks/useScrollReveal'

const DomainCard = ({ title, tags, icon: Icon }: (typeof domains)[number]) => (
  <div className="glass-card group flex flex-col gap-4 p-6 transition-all duration-300 hover:border-cyan-400/40">
    <Icon className="h-12 w-12 text-white transition-transform duration-300 group-hover:scale-110" />
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-[var(--text-secondary)] transition-colors hover:bg-white/10"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

export const TechDomains = () => {
  const marqueeItems = [...domains, ...domains]

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

        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <motion.div key={domain.title} variants={fadeUp}>
              <DomainCard {...domain} />
            </motion.div>
          ))}
        </div>

        <div className="relative overflow-hidden md:hidden">
          <div className="flex w-[200%] gap-4 animate-marquee">
            {marqueeItems.map((domain, index) => (
              <div key={`${domain.title}-${index}`} className="w-1/2 pr-4">
                <DomainCard {...domain} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
