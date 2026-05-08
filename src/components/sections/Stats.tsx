import { motion } from 'framer-motion'

import { stats } from '../../data/stats'
import { fadeUp, staggerContainer } from '../../hooks/useScrollReveal'
import { useCountUp } from '../../hooks/useCountUp'

const StatCard = ({
  stat,
  index,
}: {
  stat: (typeof stats)[number]
  index: number
}) => {
  const { ref, value } = useCountUp(stat.value)

  return (
    <div className="relative">
      {index !== 0 && (
        <div className="absolute -left-4 top-0 hidden h-full w-px bg-white/10 md:block" />
      )}
      <div ref={ref} className="space-y-2 text-center md:text-left">
        <div className="text-4xl font-semibold text-white md:text-5xl">
          <span className="gradient-text">{value}</span>
          <span className="gradient-text">{stat.suffix}</span>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
      </div>
    </div>
  )
}

export const Stats = () => {
  return (
    <section className="section-padding section-fade">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#0b0b12] via-[#0d0d14] to-[#09090f] p-10 md:p-12"
      >
        <motion.div variants={fadeUp} className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
