export interface TeamMember {
  name: string
  role: string
  year: string
  branch: string
  socials: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

const baseSocials = {
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  twitter: 'https://x.com/',
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Aryan Mehta',
    role: 'President',
    year: '4th Year',
    branch: 'CSE',
    socials: baseSocials,
  },
  {
    name: 'Priya Nair',
    role: 'Vice President',
    year: '3rd Year',
    branch: 'ISE',
    socials: baseSocials,
  },
  {
    name: 'Rohan Sharma',
    role: 'Tech Lead',
    year: '3rd Year',
    branch: 'CSE',
    socials: baseSocials,
  },
  {
    name: 'Sneha Patel',
    role: 'Design Lead',
    year: '2nd Year',
    branch: 'CSE',
    socials: baseSocials,
  },
  {
    name: 'Karan Joshi',
    role: 'Events Head',
    year: '3rd Year',
    branch: 'ECE',
    socials: baseSocials,
  },
  {
    name: 'Ananya Rao',
    role: 'Community Manager',
    year: '2nd Year',
    branch: 'ISE',
    socials: baseSocials,
  },
  {
    name: 'Dev Malhotra',
    role: 'Open Source Lead',
    year: '4th Year',
    branch: 'CSE',
    socials: baseSocials,
  },
  {
    name: 'Ishaan Gupta',
    role: 'ML Lead',
    year: '3rd Year',
    branch: 'AIML',
    socials: baseSocials,
  },
]

export const getAvatarUrl = (name: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`
