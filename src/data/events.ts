export type EventCategory = 'Workshop' | 'Hackathon' | 'Session' | 'Sprint'

export interface EventItem {
  title: string
  date: string
  description: string
  category: EventCategory
}

export const events: EventItem[] = [
  {
    title: 'Git & GitHub Bootcamp',
    date: 'Jan 18 · 5:00 PM',
    description: 'Everything from init to pull requests.',
    category: 'Workshop',
  },
  {
    title: 'Web Dev Intensive',
    date: 'Feb 3 · 10:00 AM',
    description: 'Build a full-stack app in one weekend.',
    category: 'Workshop',
  },
  {
    title: 'AI/ML Paper Reading Club',
    date: 'Feb 15 · 6:30 PM',
    description: 'Understand foundational papers together.',
    category: 'Session',
  },
  {
    title: 'Open Source Sprint',
    date: 'Mar 1–2 · 48 Hours',
    description: '48 hours. Real issues. Real PRs.',
    category: 'Hackathon',
  },
]
