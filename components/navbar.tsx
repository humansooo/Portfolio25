'use client'

import type React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  Briefcase,
  ArrowRight,
  Cross,
  Dot,
  DotIcon,
  Mail,
  User,
  Github,
  LucideArrowRight,
  Menu,
  MenuIcon,
  XIcon,
} from 'lucide-react'
import { user } from '@/constants/data'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Work', href: '#experience', icon: <Briefcase size={16} /> },
  { name: 'About', href: '#about', icon: <User size={16} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
]

export default function Navbar() {
  const isMobile = useIsMobile()
  const [activeSection, setActiveSection] = useState('about')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'skills', 'contact']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }

      // Handle navbar visibility based on scroll direction
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down - hide navbar with lower threshold
        setIsVisible(false)
      } else {
        // Scrolling up - show navbar
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const handleMobileMenuToggle = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Use native smooth scroll with proper offset
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const MobileMenuBtn = () => {
    return (
      <div>
        <button
          onClick={handleMobileMenuToggle}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-sm font-medium text-foreground transition-colors hover:text-foreground"
        >
          <XIcon
            size={18}
            strokeWidth={2}
            className={cn(
              'text-foreground transition-all duration-300',
              !isMobileOpen && 'rotate-[45deg]'
            )}
          />
        </button>
      </div>
    )
  }

  const MobileMenu = () => {
    return (
      <div
        className={cn(
          'fixed inset-0 z-50 h-screen w-full bg-background/50 backdrop-blur-sm transition-all duration-300',
          isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-4 p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                handleSmoothScroll(e, item.href)
                handleMobileMenuToggle()
              }}
              className="flex items-center text-4xl font-bytesized text-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
          <a
            href={user.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-4xl font-bytesized text-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </div>
    )
  }

  return (
    <>
      <MobileMenu />
      <header
        className={cn(
          'fixed top-0 z-50 w-full bg-background/50 backdrop-blur-sm transition-transform duration-300',
          isVisible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div
          className={cn(
            'mx-auto flex h-20 lg:max-w-[640px] items-center justify-between relative px-8 max-md:justify-center',
            isMobile ? 'px-4' : 'px-8'
          )}
        >
          <Link
            href="/"
            className="text-xl font-bytesized text-foreground"
          >
            Himanshu
          </Link>

          {!isMobile ? (
            <nav className="flex max-md:hidden space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="transition-colors hover:bg-foreground/10 rounded-xl p-2"
                >
                  {item.icon}
                </Link>
              ))}
            </nav>
          ) : (
            <MobileMenuBtn />
          )}
          <a
            href={user.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'text-sm font-medium text-foreground transition-colors hover:text-foreground max-md:hidden'
            )}
          >
            GitHub{' '}
            <Github
              className="inline-block"
              size={16}
              color="currentColor"
              strokeWidth={2}
            />
          </a>
        </div>
      </header>
    </>
  )
}
