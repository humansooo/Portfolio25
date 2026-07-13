import type React from 'react'
import { user } from '@/constants/data'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="w-full">
      <p
        className="overline-label fade-up"
        style={{ '--fade-delay': '0ms' } as React.CSSProperties}
      >
        Himanshu Suthar — Full Stack Developer
      </p>

      <h1
        className="display fade-up text-foreground mt-8 text-[2.5rem] md:text-[3.25rem]"
        style={{ '--fade-delay': '120ms' } as React.CSSProperties}
      >
        Building <em>software</em> that ships —
        <br className="hidden md:block" /> from Play Store releases
        <br className="hidden md:block" /> to production dashboards.
      </h1>

      <p
        className="fade-up text-muted-foreground mt-8 max-w-[46ch] text-[15px] leading-relaxed"
        style={{ '--fade-delay': '240ms' } as React.CSSProperties}
      >
        Three+ years shipping React Native, NestJS and TypeScript daily — across
        healthtech, mobility and SaaS. I own products end to end: architecture,
        CI/CD, and everything in between.
      </p>

      <div
        className="fade-up mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
        style={{ '--fade-delay': '360ms' } as React.CSSProperties}
      >
        <Link
          href={`mailto:${user.email}`}
          className="group border-foreground/20 hover:border-foreground/60 text-foreground inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors duration-300"
        >
          Get in touch
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
        <Link
          href={user.github}
          target="_blank"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
        >
          GitHub
        </Link>
        <Link
          href={user.linkedin}
          target="_blank"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
        >
          LinkedIn
        </Link>
      </div>
    </section>
  )
}
