'use client'
import { useInView, motion, MotionProps } from 'motion/react'
import React from 'react'

interface FadeInWhenVisibleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  repeat?: boolean
}

export const FadeInWhenVisible = ({
  children,
  delay = 0,
  repeat = true,
  ...props
}: FadeInWhenVisibleProps) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: !repeat, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={
        isInView
          ? { opacity: 1, filter: 'blur(0px)' }
          : { opacity: 0, filter: 'blur(10px)' }
      }
      transition={{ duration: 0.6, delay }}
      {...props}
      onDrag={undefined}
      onDragEnd={undefined}
      onDragStart={undefined}
      onDragEnter={undefined}
      onDragLeave={undefined}
      onDragOver={undefined}
      onDrop={undefined}
    >
      {children}
    </motion.div>
  )
}
