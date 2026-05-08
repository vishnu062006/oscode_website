import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'

import { fadeUp, staggerContainer } from '../../hooks/useScrollReveal'
import { Button } from '../ui/button'

export const Contact = () => {
  return (
    <section id="contact" className="section-padding section-fade">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="glass-card mx-auto flex flex-col items-center gap-8 p-10 text-center md:p-12"
      >
        <motion.div variants={fadeUp} className="space-y-4">
          <h2 className="text-3xl font-semibold md:text-4xl">Let’s Build Together</h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Ready to contribute, collaborate, and ship? Join the OSCode Club community and get
            access to mentors, projects, and events.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Mail className="h-4 w-4 text-cyan-300" />
            oscode@bmsce.ac.in
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <MapPin className="h-4 w-4 text-violet-300" />
            Bengaluru, India
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="button-shimmer bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-glow"
            data-cursor="hover"
          >
            Join the Club
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white"
            data-cursor="hover"
          >
            Partner with Us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
