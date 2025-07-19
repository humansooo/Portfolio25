'use client'

import Link from 'next/link'

export default function HomeCom() {
  return (
    <div className="mt-10 flex flex-row items-center gap-4">
      <Link
        href="mailto:himanshuforpro@gmail.com"
        className="border-foreground/10 font-geist-sans sodo shadow-foreground/20 rounded-xl border border-dashed p-2 px-4 text-lg shadow-[inset_5px_5px_5px_currentColor] transition-all duration-700 hover:shadow-[inset_10px_10px_10px_#667]"
      >
        Mail me
      </Link>
    </div>
  )
}
