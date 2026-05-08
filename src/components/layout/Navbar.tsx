import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { navLinks } from '../../data/navigation'
import { Button } from '../ui/button'
import { Logo } from './Logo'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const sectionIds = useMemo(() => navLinks.map((link) => link.href.replace('#', '')), [])
  const { scrollY } = useScroll()
  const background = useTransform(scrollY, [0, 80], ['rgba(5,5,8,0)', 'rgba(5,5,8,0.82)'])
  const border = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.06)'])
  const blur = useTransform(scrollY, [0, 80], [0, 16])
  const shadow = useTransform(scrollY, [0, 80], ['0 0 0 rgba(0,0,0,0)', '0 10px 30px rgba(0,0,0,0.25)'])
  const backdropFilter = useMotionTemplate`blur(${blur}px)`

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <motion.header
      className="sticky top-0 z-50 w-full"
      style={{ background, borderBottomColor: border, backdropFilter, boxShadow: shadow }}
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 opacity-80" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              data-active={activeSection === link.href.replace('#', '')}
              aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button
            className="button-shimmer border border-violet-400/40 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 text-white shadow-[0_12px_40px_rgba(59,130,246,0.35)] hover:scale-[1.03]"
            data-cursor="hover"
          >
            Join Us
          </Button>
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#050508]/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-72 bg-[#0d0d14] p-6"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                  aria-label="Close navigation"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <Button
                className="button-shimmer mt-8 w-full border border-violet-500/40 bg-gradient-to-r from-violet-500 to-blue-500 text-white"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
