'use client'
import { motion } from 'motion/react'

export default function Graphic() {
  return (
    <div className="absolute bottom-[-300px] z-[0] right-[-300px]">
      <motion.div
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 4,
          delay: 0.5,
        }}
        className="lg:h-[1000px] lg:w-[1000px] h-[500px] w-[500px]  rounded-full border border-dashed border-border/60 "
      />
    </div>
  )
}
