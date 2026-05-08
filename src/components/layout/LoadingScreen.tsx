import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

const bootLines = [
  'Initializing OSCode runtime...',
  'Loading community modules...',
  'Synchronizing open source nodes...',
  'Boot sequence complete.',
]

export const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#050816]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex w-full max-w-xl flex-col items-center gap-6 px-6 text-center">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 shadow-[0_0_40px_rgba(59,130,246,0.45)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Code2 className="h-7 w-7 text-white" />
        </motion.div>

        <div className="space-y-2">
          <motion.p
            className="text-xs uppercase tracking-[0.4em] text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            OSCode Club
          </motion.p>
          <motion.h1
            className="text-2xl font-semibold text-white md:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Booting the developer universe
          </motion.h1>
        </div>

        <div className="w-full max-w-md space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left font-mono text-xs text-white/60 backdrop-blur-xl">
          {bootLines.map((line, index) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            >
              <span className="text-cyan-300">$</span> {line}
            </motion.div>
          ))}
        </div>

        <div className="w-full max-w-md">
          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 shadow-[0_0_24px_rgba(59,130,246,0.6)]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">
            Loading experience
          </p>
        </div>
      </div>
    </motion.div>
  )
}
