'use client'

import type React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { user } from '@/constants/data'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Work', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  { name: 'GitHub', href: user.github, external: true },
]

export default function Navbar() {
  const isMobile = useIsMobile()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const targetElement = document.getElementById(href.substring(1))
    targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Mobile menu overlay */}
      <div
        className={cn(
          'bg-background/80 fixed inset-0 z-40 backdrop-blur-lg transition-all duration-500',
          isMobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <nav className="flex h-full flex-col items-start justify-center gap-6 px-10">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              onClick={(e) => {
                handleSmoothScroll(e, item.href)
                setIsMobileOpen(false)
              }}
              className={cn(
                'display text-foreground text-4xl transition-all duration-500',
                isMobileOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0',
              )}
              style={{ transitionDelay: isMobileOpen ? `${i * 60}ms` : '0ms' }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-transform duration-500',
          isVisible || isMobileOpen ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div className="from-background via-background/70 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent" />
        <div className="relative mx-auto flex h-20 w-full max-w-[672px] items-center justify-between px-6 md:px-8">
          <Link href="/" className="display text-foreground text-xl">
            HS<em>.</em>
          </Link>

          {!isMobile ? (
            <nav className="flex items-center gap-7">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="font-geist-mono text-muted-foreground hover:text-foreground text-[11px] tracking-widest uppercase transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          ) : (
            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="font-geist-mono text-muted-foreground hover:text-foreground text-[11px] tracking-widest uppercase transition-colors"
            >
              {isMobileOpen ? 'Close' : 'Menu'}
            </button>
          )}
        </div>
      </header>
    </>
  )
}
