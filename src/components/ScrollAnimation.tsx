'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: 'fadeIn' | 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn'
  delay?: number
  duration?: number
  once?: boolean
  'data-element'?: string
  'data-name'?: string
}

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
}

export function ScrollAnimation({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  once = true,
  'data-element': dataElement,
  'data-name': dataName,
}: ScrollAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      transition={{ duration, delay }}
      variants={animations[animation]}
      className={className}
      data-element={dataElement}
      data-name={dataName}
    >
      {children}
    </motion.div>
  )
}
