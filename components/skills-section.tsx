import { FadeInWhenVisible } from "./animate";
import { EasterEgg } from "./animations";

export default function SkillsSection() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Figma",
    "Tailwind CSS",
  ];

  return (
    <section className="py-24 relative">
      <EasterEgg rotate={260} />
      <FadeInWhenVisible className="w-full">
        <h2 className="mb-16 font-bytesized text-2xl font-light text-foreground gloom">
          Skills
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              role="button"
              className="rounded-xl  border border-dashed border-foreground/10 px-4 py-2 sodo shadow-[inset_5px_5px_5px_#6664] hover:shadow-[inset_7px_7px_7px_#667] text-xs text-foreground  duration-700 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
