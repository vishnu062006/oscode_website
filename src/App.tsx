import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Footer } from './components/layout/Footer'
import { LoadingScreen } from './components/layout/LoadingScreen'
import { Navbar } from './components/layout/Navbar'
import { CursorGlow } from './components/layout/CursorGlow'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Events } from './components/sections/Events'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { Team } from './components/sections/Team'
import { TechDomains } from './components/sections/TechDomains'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 2400)
    document.body.style.overflow = isLoading ? 'hidden' : 'auto'
    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [isLoading])

  return (
    <div className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <div className="pointer-events-none fixed inset-0 bg-grid-pattern opacity-[0.05]" />
      <div className="pointer-events-none fixed inset-0 mesh-gradient" />
      <div className="pointer-events-none fixed inset-0 cursor-spotlight" />
      <div className="pointer-events-none fixed inset-0 noise-overlay" />
      <CursorGlow />

      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 18 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: isLoading ? 0 : 0.1 }}
      >
        <Navbar />
        <main className="overflow-hidden">
          <Hero />
          <About />
          <Stats />
          <TechDomains />
          <Events />
          <Team />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
