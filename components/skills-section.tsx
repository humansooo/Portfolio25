import { FadeInWhenVisible } from './animate'
import { EasterEgg } from './animations'
import { GlassButton } from './ui/glass-button'

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
            <GlassButton key={index}>{skill}</GlassButton>
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  )
}
