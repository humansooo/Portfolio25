'use client'

import type React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Briefcase, Mail, User, Github, XIcon } from 'lucide-react'
import { user } from '@/constants/data'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'About', href: '#about', icon: <User size={16} /> },
  { name: 'Work', href: '#experience', icon: <Briefcase size={16} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
  { name: 'github', href: user.github, icon: <Github size={16} /> },
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
    href: string,
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
          className="text-foreground hover:text-foreground absolute top-1/2 right-4 flex -translate-y-1/2 items-center justify-center text-sm font-medium transition-colors"
        >
          <XIcon
            size={18}
            strokeWidth={2}
            className={cn(
              'text-foreground transition-all duration-300',
              !isMobileOpen && 'rotate-45',
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
          'bg-background/50 fixed inset-0 z-50 h-screen w-full backdrop-blur-sm transition-all duration-[1000]',
          isMobileOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0',
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center space-y-4 p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                handleSmoothScroll(e, item.href)
                handleMobileMenuToggle()
              }}
              className="font-bytesized text-foreground hover:text-foreground flex items-center text-4xl transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    )
  }

  return (
    <>
      <MobileMenu />
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-transform duration-300',
          isVisible ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div
          className={cn(
            'relative mx-auto flex h-20 items-center justify-between px-8 max-md:justify-center lg:max-w-[640px]',
            isMobile ? 'px-4' : 'px-8',
          )}
        >
          <Link
            href="/"
            className="font-bytesized text-foreground sodo text-xl"
          >
            Himanshu
          </Link>

          {!isMobile ? (
            <nav className="text-shadow-hazy flex space-x-2 max-md:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  style={
                    {
                      // boxShadow: " 5px 5px 5px #6666",
                    }
                  }
                  className="sodo rounded-xl p-2 shadow-[inset_4px_4px_4px_#60606030] transition-all duration-500 hover:bg-[#4441] hover:px-3.5 hover:shadow-[inset_7px_7px_7px_#6664]"
                >
                  {item.icon}
                </Link>
              ))}
            </nav>
          ) : (
            <MobileMenuBtn />
          )}
        </div>
      </header>
    </>
  )
}
