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
  tags: string[]
  icon: LucideIcon
}

export const domains: Domain[] = [
  {
    title: 'Web Dev',
    tags: ['React', 'Next.js', 'Node.js'],
    icon: Code2,
  },
  {
    title: 'AI / ML',
    tags: ['PyTorch', 'HuggingFace', 'LLMs'],
    icon: Brain,
  },
  {
    title: 'Open Source',
    tags: ['Git', 'GitHub', 'CI/CD'],
    icon: GitBranch,
  },
  {
    title: 'Competitive Programming',
    tags: ['C++', 'Algorithms', 'LeetCode'],
    icon: Trophy,
  },
  {
    title: 'UI / UX',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
    icon: Palette,
  },
  {
    title: 'Cloud & DevOps',
    tags: ['Docker', 'AWS', 'Kubernetes'],
    icon: Cloud,
  },
]
