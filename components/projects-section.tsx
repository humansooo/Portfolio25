import { projects } from '@/constants/data'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import SectionHeading from './section-heading'

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const inner = (
    <>
      <span className="font-geist-mono text-muted-foreground/70 w-8 shrink-0 pt-1 text-xs">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline justify-between gap-3">
          <span className="text-foreground text-[15px] font-medium tracking-tight">
            {project.title}
          </span>
          {'link' in project && project.link && (
            <ArrowUpRight
              size={15}
              className="text-muted-foreground group-hover:text-foreground shrink-0 translate-y-0.5 opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            />
          )}
        </span>
        {'description' in project && project.description && (
          <span className="text-muted-foreground mt-1.5 block text-[13px] leading-relaxed">
            {project.description}
          </span>
        )}
        <span className="font-geist-mono text-muted-foreground/80 mt-2.5 block text-[11px] tracking-wide">
          {project.skills.join(' · ')}
        </span>
      </span>
    </>
  )

  const rowClass =
    'group border-border flex gap-3 border-b py-6 transition-colors duration-300 first:pt-0'

  if ('link' in project && project.link) {
    return (
      <Link
        href={project.link}
        target="_blank"
        className={`${rowClass} hover:border-foreground/40`}
      >
        {inner}
      </Link>
    )
  }

  return <div className={rowClass}>{inner}</div>
}

export default function ProjectsSection() {
  return (
    <section>
      <SectionHeading index="02" title="Selected Projects" />
      <div>
        {projects.map((project, index) => (
          <ProjectRow key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
