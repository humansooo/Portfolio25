import { user } from '@/constants/data'
import Link from 'next/link'
import SectionHeading from './section-heading'
import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Email', href: `mailto:${user.email}`, value: user.email },
  { label: 'Phone', href: `tel:${user.phone}`, value: user.phone },
  { label: 'GitHub', href: user.github, value: 'github.com/humansooo' },
  { label: 'LinkedIn', href: user.linkedin, value: 'linkedin.com/in/kitchens-on-fire' },
]

export default function ContactSection() {
  return (
    <section>
      <SectionHeading index="05" title="Contact" />
      <h3 className="display text-foreground text-3xl md:text-4xl">
        Have something in mind?
        <br />
        <em>Let&apos;s talk.</em>
      </h3>
      <p className="text-muted-foreground mt-6 max-w-[46ch] text-sm leading-relaxed">
        Open to full-time roles, contract work and interesting side quests.
        The fastest way to reach me is email.
      </p>

      <div className="mt-10 space-y-0">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            className="group border-border hover:border-foreground/40 flex items-baseline justify-between gap-4 border-0 py-4 transition-colors duration-300"
          >
            <span className="font-geist-mono text-muted-foreground text-[11px] tracking-widest uppercase">
              {link.label}
            </span>
            <span className="text-foreground inline-flex items-center gap-1.5 text-sm">
              {link.value}
              <ArrowUpRight
                size={13}
                className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
