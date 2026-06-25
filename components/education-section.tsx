import { education, extras } from '@/constants/data'
import { FadeInWhenVisible } from './animate'

export default function EducationSection() {
  return (
    <section>
      <FadeInWhenVisible className="w-full">
        <h2 className="font-bytesized text-foreground gloom mb-16 text-2xl font-light">
          Education
        </h2>
        <div className="space-y-12">
          {education.map((item, index) => (
            <div key={index}>
              <h3 className="text-foreground/80 mb-3 flex w-full items-center justify-between text-xl font-bold">
                <span>{item.degree}</span>
                <p className="text-foreground/90 font-geist-mono text-right text-xs">
                  {item.year}
                </p>
              </h3>
              <p className="text-foreground/80 text-sm font-semibold">
                {item.institution}
              </p>
              <p className="text-foreground/80 text-sm">{item.location}</p>
            </div>
          ))}
        </div>

        <h2 className="font-bytesized text-foreground gloom mt-16 mb-16 text-2xl font-light">
          Extra
        </h2>
        <div className="space-y-6">
          {extras.map((item, index) => (
            <div key={index}>
              <h3 className="text-foreground/80 text-sm font-bold">
                {item.role}
              </h3>
              <p className="text-foreground/80 text-sm">
                {item.organization}, {item.institution}
              </p>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  )
}
