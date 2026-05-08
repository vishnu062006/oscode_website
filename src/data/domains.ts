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
  description: string
  focusAreas: string[]
  icon: LucideIcon
}

export const domains: Domain[] = [
  {
    title: 'Web Dev',
    description: 'Ship full-stack experiences from concept to production.',
    focusAreas: ['Product engineering', 'Design systems', 'Performance'],
    icon: Code2,
  },
  {
    title: 'AI / ML',
    description: 'Research, prototype, and deploy intelligent systems.',
    focusAreas: ['Model building', 'Applied AI', 'Data tooling'],
    icon: Brain,
  },
  {
    title: 'Open Source',
    description: 'Build in public with real users and contributors.',
    focusAreas: ['Maintainer workflow', 'Collaboration', 'Impact'],
    icon: GitBranch,
  },
  {
    title: 'Competitive Programming',
    description: 'Sharpen problem-solving skills with regular sprints.',
    focusAreas: ['Algorithms', 'Contests', 'Mentorship'],
    icon: Trophy,
  },
  {
    title: 'UI / UX',
    description: 'Design intuitive interfaces that feel premium.',
    focusAreas: ['Research', 'Prototyping', 'Interaction'],
    icon: Palette,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploy, scale, and monitor resilient infrastructure.',
    focusAreas: ['Cloud stacks', 'Automation', 'Reliability'],
    icon: Cloud,
  },
]
