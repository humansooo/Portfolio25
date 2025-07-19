import { FadeInWhenVisible } from './animate'
import { EasterEgg } from './animations'

export default function SkillsSection() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'Figma',
    'Tailwind CSS',
  ]

  return (
    <section className="relative">
      <EasterEgg rotate={260} />
      <FadeInWhenVisible className="w-full">
        <h2 className="font-bytesized text-foreground gloom mb-16 text-2xl font-light">
          Skills
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          {skills.map((skill, index) => (
            <button
              key={index}
              className="border-foreground/10 sodo text-foreground font-geist-mono rounded-xl border border-dashed px-4 py-2 text-xs shadow-[inset_5px_5px_5px_#6664] transition-all duration-700 hover:shadow-[inset_7px_7px_7px_#6676]"
            >
              {skill}
            </button>
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  )
}
