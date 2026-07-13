import { experiences } from '@/constants/data'
import { HtmlRenderer } from './ui/html-renderer'
import SectionHeading from './section-heading'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section>
      <SectionHeading index="01" title="Experience" />
      <div className="space-y-14">
        {experiences.map((exp, index) => (
          <article key={index} className="group">
            <p className="font-geist-mono text-muted-foreground text-[11px] tracking-widest uppercase">
              {exp.year}
            </p>
            <h3 className="mt-2.5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              {exp.link ? (
                <Link
                  href={exp.link}
                  target="_blank"
                  className="text-foreground inline-flex items-baseline gap-1.5 text-lg font-medium tracking-tight"
                >
                  <span>{exp.company}</span>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground translate-y-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </Link>
              ) : (
                <span className="text-foreground text-lg font-medium tracking-tight">
                  {exp.company}
                </span>
              )}
              <span className="display text-muted-foreground text-base italic">
                {exp.title}
              </span>
            </h3>
            <HtmlRenderer
              content={exp.description}
              className="text-muted-foreground mt-3 text-sm leading-relaxed"
            />
          </article>
        ))}
      </div>
    </section>
  )
}
