import { Github, Linkedin, Mail, MapPin, MessageSquare, Twitter } from 'lucide-react'

import { footerLinks, socialLinks } from '../../data/navigation'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Logo } from './Logo'

const socialIcons = {
  GitHub: Github,
  Discord: MessageSquare,
  Twitter: Twitter,
  LinkedIn: Linkedin,
}

export const Footer = () => {
  return (
    <footer className="bg-[var(--bg-base)] text-[var(--text-secondary)]">
      <div className="h-px w-full bg-gradient-to-r from-violet-500 via-blue-500/40 to-cyan-400/80" />
      <div className="section-padding grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm text-white/70">
            A community of builders crafting real-world open-source projects and launching
            developer careers.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-button"
                >
                  {Icon ? <Icon className="h-4 w-4" /> : link.label}
                </a>
              )
            })}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Navigate
          </h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Contact
          </h3>
          <div className="space-y-3 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white/70" />
              <span>oscode@bmsce.ac.in</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-white/70" />
              <span>Bengaluru, India</span>
            </div>
          </div>
          <Button
            className="button-shimmer mt-2 w-full border border-cyan-500/40 bg-white/5 text-white hover:bg-cyan-500/10"
            data-cursor="hover"
          >
            Join Discord
          </Button>
        </div>
      </div>
      <Separator className="mx-auto max-w-7xl bg-white/5" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-6 text-center text-xs text-[var(--text-muted)] md:flex-row md:justify-between md:text-left">
        <span>© 2025 OSCode Club · BMS College of Engineering</span>
        <span>Built with ♥ by OSCoders</span>
      </div>
    </footer>
  )
}
