import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Events } from './components/sections/Events'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { Team } from './components/sections/Team'
import { TechDomains } from './components/sections/TechDomains'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
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
    </div>
  )
}

export default App
