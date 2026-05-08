export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

export const cardHover = {
  whileHover: { y: -6, scale: 1.01, transition: { duration: 0.2 } },
}

export const useScrollReveal = () => ({ fadeUp, staggerContainer, cardHover })
