'use client'
import { motion, HTMLMotionProps } from 'framer-motion'
import React from 'react'

interface FadeInWhenVisibleProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  // delay?: number;
  // repeat?: boolean;
}

export const FadeInWhenVisible = ({
  children,
  // delay = 0,
  // repeat = true,
  ...props
}: FadeInWhenVisibleProps) => {
  return (
    // <motion.div
    //   initial={{ opacity: 0, filter: "blur(10px)" }}
    //   whileInView={{ opacity: 1, filter: "blur(0px)" }}
    //   transition={{ duration: 0.6, delay }}
    //   {...props}
    // >
    // @ts-ignore
    <div {...props}>{children}</div>
    // </motion.div>
  )
}
