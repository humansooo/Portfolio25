import { skills as skillGroups } from '@/constants/data'
import { FadeInWhenVisible } from './animate'
import { EasterEgg } from './animations'
import { GlassButton } from './ui/glass-button'

const skills = [
  ...skillGroups.frontend,
  ...skillGroups.backend,
  ...skillGroups.databaseAndCloud,
  ...skillGroups.languages,
  ...skillGroups.devops,
]

export default function SkillsSection() {
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
