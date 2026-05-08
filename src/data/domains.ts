import {
  Brain,
  Cloud,
  Code2,
  GitBranch,
  Palette,
  Trophy,
  type LucideIcon,
} from 'lucide-react'

export interface Domain {
  title: string
  summary: string
  highlights: string[]
  icon: LucideIcon
}

export const domains: Domain[] = [
  {
    title: 'Web Dev',
    summary: 'Ship full-stack experiences from concept to production.',
    highlights: ['Product engineering', 'Design systems', 'Performance'],
    icon: Code2,
  },
  {
    title: 'AI / ML',
    summary: 'Research, prototype, and deploy intelligent systems.',
    highlights: ['Model building', 'Applied AI', 'Data tooling'],
    icon: Brain,
  },
  {
    title: 'Open Source',
    summary: 'Build in public with real users and contributors.',
    highlights: ['Maintainer workflow', 'Collaboration', 'Impact'],
    icon: GitBranch,
  },
  {
    title: 'Competitive Programming',
    summary: 'Sharpen problem-solving skills with regular sprints.',
    highlights: ['Algorithms', 'Contests', 'Mentorship'],
    icon: Trophy,
  },
  {
    title: 'UI / UX',
    summary: 'Design intuitive interfaces that feel premium.',
    highlights: ['Research', 'Prototyping', 'Interaction'],
    icon: Palette,
  },
  {
    title: 'Cloud & DevOps',
    summary: 'Deploy, scale, and monitor resilient infrastructure.',
    highlights: ['Cloud stacks', 'Automation', 'Reliability'],
    icon: Cloud,
  },
]
