import { Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

import { getAvatarUrl, teamMembers } from '../../data/team'
import { fadeUp, staggerContainer } from '../../hooks/useScrollReveal'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

export const Team = () => {
  return (
    <section id="team" className="section-padding section-fade">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="space-y-12"
      >
        <motion.div variants={fadeUp} className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">The People Behind OSCode</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Meet the student leaders shaping our open-source culture and community.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="glass-card group relative flex flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-20 bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-cyan-400/20 blur-3xl" />
              </div>
              <div className="relative z-10 h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-blue-400 to-cyan-400 p-[2px] transition-transform duration-700 group-hover:rotate-[360deg]">
                  <div className="h-full w-full rounded-full bg-[var(--bg-surface)]" />
                </div>
                <img
                  src={getAvatarUrl(member.name)}
                  alt={member.name}
                  className="relative z-10 h-24 w-24 rounded-full border border-white/10 object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{member.role}</p>
              <p className="mt-1 text-xs font-mono text-[var(--text-muted)]">
                {member.year} · {member.branch}
              </p>
              <div className="mt-4 flex gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-1 group-hover:opacity-100">
                {Object.entries(member.socials).map(([key, value]) => {
                  if (!value) return null
                  const Icon = socialIcons[key as keyof typeof socialIcons]
                  return (
                    <a
                      key={key}
                      href={value}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-button h-9 w-9"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                    </a>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
