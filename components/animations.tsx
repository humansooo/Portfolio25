'use client'

import { motion } from 'motion/react'

export const EasterEgg = () => {
  return (
    <motion.div
      className="text-3xl font-bytesized text-foreground"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 1000,
        delay: 1,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      (*)
    </motion.div>
  )
}
