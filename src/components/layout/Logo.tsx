import { Code2 } from 'lucide-react'

import { cn } from '../../lib/utils'

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => (
  <a href="#" className={cn('flex items-center gap-3', className)}>
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 shadow-glow">
      <Code2 className="h-5 w-5 text-white" />
    </span>
    <span className="text-lg font-semibold tracking-wide text-white">OSCode Club</span>
  </a>
)
