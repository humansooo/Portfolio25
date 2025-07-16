import { experiences } from '@/constants/data'
import { Dot } from 'lucide-react'
import { FadeInWhenVisible } from './animate'
import ExpLinkTitle from './ui/exp-link-title'

export default function ExperienceSection() {
  return (
    <section className="py-24">
      <FadeInWhenVisible className="w-full">
        <h2 className="mb-16 text-center text-2xl font-light text-foreground">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex "
            >
              <div className="w-full">
                <h3 className="mb-2 w-full flex items-center justify-between text-lg font-medium text-foreground">
                  <ExpLinkTitle title={exp.title} link={exp.link} />
                  <div className="text-xs text-right font-medium text-foreground">
                    {exp.year}
                  </div>
                </h3>
                <p className="mb-0 text-sm font-semibold text-foreground">{exp.company}</p>
                <p className="text-sm leading-relaxed text-foreground">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  )
}
