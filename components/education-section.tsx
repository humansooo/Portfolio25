import { education, extras } from '@/constants/data'
import SectionHeading from './section-heading'

export default function EducationSection() {
  return (
    <section>
      <SectionHeading index="04" title="Education" />
      <div className="space-y-10">
        {education.map((item, index) => (
          <div key={index}>
            <p className="font-geist-mono text-muted-foreground text-[11px] tracking-widest uppercase">
              {item.year}
            </p>
            <h3 className="text-foreground mt-2.5 text-lg font-medium tracking-tight">
              {item.degree}
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {item.institution} — {item.location}
            </p>
          </div>
        ))}

        {extras.map((item, index) => (
          <div key={index}>
            <p className="font-geist-mono text-muted-foreground text-[11px] tracking-widest uppercase">
              Beyond the degree
            </p>
            <h3 className="text-foreground mt-2.5 text-lg font-medium tracking-tight">
              {item.role}
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {item.organization}, {item.institution}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
