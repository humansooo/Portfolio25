'use client'

import { motion } from 'motion/react'

export default function GrainAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      transition={{ duration: 2 }}
    >
      <motion.div
        aria-hidden="true"
        className="grain-animate pointer-events-none fixed inset-0 z-999999999 opacity-[0.05] transition-all duration-500 dark:opacity-[0.02] dark:bg-blend-multiply"
        style={{
          backgroundImage:
            'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")',
          height: '300%',
          width: '300%',
          top: 0,
          left: 0,
        }}
      />
      <style jsx global>{`
        @keyframes animate-grain {
          0%,
          100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-5%, -10%);
          }
          20% {
            transform: translate(-15%, -20%);
          }
          30% {
            transform: translate(-5%, -10%);
          }
          40% {
            transform: translate(-15%, -20%);
          }
          50% {
            transform: translate(-5%, -10%);
          }
          60% {
            transform: translate(-15%, -20%);
          }
          70% {
            transform: translate(-5%, -10%);
          }
          80% {
            transform: translate(-15%, -20%);
          }
          90% {
            transform: translate(-5%, -10%);
          }
          100% {
            transform: translate(-15%, -20%);
          }
        }
        .grain-animate {
          animation: animate-grain 8s steps(10) infinite;
        }
      `}</style>
    </motion.div>
  )
}
