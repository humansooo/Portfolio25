import { projects } from '@/constants/data'
import { Link2 } from 'lucide-react'
import Image from 'next/image'
import { FadeInWhenVisible } from './animate'
import Link from 'next/link'

export default function ProjectsSection() {
  return (
    <section className="py-24">
      <div className="w-full">
        <h2 className="mb-16 text-center text-2xl font-light text-foreground">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeInWhenVisible
              key={index}
              className=" gap-2 flex flex-col border relative border-dashed border-border p-4 "
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.image}
                  draggable={false}
                  width={500}
                  height={500}
                  className="object-cover transition-transform duration-500 rounded-sm hover:scale-105 aspect-[8/5]"
                />
              </div>
              <div className="">
                <h3 className="text-lg font-bold flex items-center justify-between text-foreground/80">
                  {project.title}

                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-block cursor-pointer text-foreground/30 "
                    >
                      <Link2 size={18} />
                    </Link>
                  )}
                </h3>
                <p className="text-sm font-bold text-foreground flex mt-2 gap-1 flex-wrap">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className=" rounded-md px-1.5 py-0.5 bg-muted/80 text-xs text-foreground/70"
                    >
                      {skill}
                    </span>
                  ))}
                </p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}
