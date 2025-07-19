'use client'

import type React from 'react'

import { useState } from 'react'
import { user } from '@/constants/data'
import Link from 'next/link'
import { toast } from 'sonner'
import { FadeInWhenVisible } from './animate'
import { LucidePhone, Mail, PhoneCall } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    toast('Thank you for your message!')
  }

  return (
    <section className="">
      <FadeInWhenVisible className="w-full">
        <h2 className="font-bytesized text-foreground gloom mb-16 text-2xl font-light">
          Contact
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="w-full">
            <p className="text-foreground mb-8 text-sm leading-relaxed">
              I'm currently open to new opportunities and collaborations. Feel
              free to reach out if you'd like to work together.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-foreground text-sm">
                <Link
                  href={`mailto:${user.email}`}
                  className="flex items-center gap-2"
                >
                  <span className="mr-2">
                    <Mail fill="currentColor" size={12} />
                  </span>
                  {user.email}
                </Link>
              </p>
              <p className="text-foreground flex items-center gap-2 text-sm">
                <Link
                  href={`tel:${user.phone}`}
                  className="flex items-center gap-2"
                >
                  <span className="mr-2">
                    <PhoneCall fill="currentColor" size={12} />
                  </span>
                  call
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="hidden space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-foreground text-foreground placeholder-foreground focus:border-foreground w-full border-b bg-transparent pb-2 text-sm focus:outline-hidden"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-foreground text-foreground placeholder-foreground focus:border-foreground w-full border-b bg-transparent pb-2 text-sm focus:outline-hidden"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="border-foreground text-foreground placeholder-foreground focus:border-foreground w-full resize-none border-b bg-transparent pb-2 text-sm focus:outline-hidden"
              />
            </div>
            <button
              type="submit"
              className="text-foreground hover:text-foreground text-sm font-medium underline transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </FadeInWhenVisible>
    </section>
  )
}
