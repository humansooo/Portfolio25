import { skills } from '@/constants/data'
import SectionHeading from './section-heading'

const groups: { label: string; items: string[] }[] = [
  { label: 'Frontend', items: skills.frontend },
  { label: 'Backend', items: skills.backend },
  { label: 'Data & Cloud', items: skills.databaseAndCloud },
  { label: 'Languages', items: skills.languages },
  { label: 'DevOps', items: skills.devops },
]

export default function SkillsSection() {
  return (
    <section>
      <SectionHeading index="03" title="Skills" />
      <dl className="space-y-5">
        {groups.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-1 gap-1 md:grid-cols-[140px_1fr] md:gap-6"
          >
            <dt className="font-geist-mono text-muted-foreground/70 pt-0.5 text-[11px] tracking-widest uppercase">
              {group.label}
            </dt>
            <dd className="text-foreground/90 text-sm leading-relaxed">
              {group.items.join(', ')}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
