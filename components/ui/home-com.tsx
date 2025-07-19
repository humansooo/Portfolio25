'use client'

import { GlassButton } from './glass-button'

export default function HomeCom() {
  return (
    <div className="mt-10 flex flex-row items-center gap-4">
      <GlassButton
        size="lg"
        onClick={() => window.open('mailto:himanshuforpro@gmail.com')}
      >
        Mail me
      </GlassButton>
    </div>
  )
}
