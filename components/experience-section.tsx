import { experiences } from '@/constants/data'
import { Dot } from 'lucide-react'
import { FadeInWhenVisible } from './animate'
import ExpLinkTitle from './ui/exp-link-title'
import { HtmlRenderer } from './ui/html-renderer'

export default function ExperienceSection() {
  return (
    <section className="">
      <FadeInWhenVisible className="w-full">
        <h2 className="font-bytesized text-foreground gloom mb-16 text-2xl font-light">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex">
              <div className="w-full">
                <h3 className="text-foreground/80 mb-3 flex w-full items-center justify-between text-xl font-bold">
                  <ExpLinkTitle title={exp.title} link={exp.link} />
                  <p className="text-foreground/90 font-geist-mono text-right text-xs">
                    {exp.year}
                  </p>
                </h3>
                <p className="text-foreground/80 mb-1 text-sm font-semibold">
                  {exp.company}
                </p>
                <HtmlRenderer
                  content={exp.description}
                  className="text-foreground/80 text-sm leading-relaxed"
                />
              </div>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  )
}
