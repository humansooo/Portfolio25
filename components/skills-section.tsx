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
    <section className="py-24">
      <div className="w-full">
        <h2 className="mb-16 text-center text-2xl font-light text-foreground">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full  border border-dashed border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
