import { projects } from '@/constants/data'
import { Link2 } from 'lucide-react'
import { FadeInWhenVisible } from './animate'
import Link from 'next/link'
import { ProjectImageGallery } from './project-image-gallery'

export default function ProjectsSection() {
  return (
    <section className="">
      <div className="w-full">
        <h2 className="font-bytesized text-foreground gloom mb-16 text-2xl font-light">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeInWhenVisible
              key={index}
              className="border-border relative flex flex-col gap-3 border border-dashed p-3 md:gap-2 md:p-2"
            >
              <ProjectImageGallery
                images={project.image}
                projectTitle={project.title}
                aspectRatio="aspect-8/5"
              />
              <div className="">
                <h3 className="font-geist-mono text-foreground/80 flex items-center justify-between text-sm font-bold">
                  {project.title}

                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-foreground/30 hover:bg-foreground/10 inline-block cursor-pointer rounded-md px-1 transition-all duration-500"
                    >
                      <Link2 size={18} />
                    </Link>
                  )}
                </h3>
                <p className="text-foreground mt-3 flex flex-wrap gap-1 text-sm font-bold">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-muted/80 text-foreground font-geist-mono rounded-md px-1.5 py-0.5 text-[10px] font-light shadow-[inset_2px_2px_2px_#6664] transition-all duration-500 hover:shadow-[inset_4px_4px_4px_#6664]"
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
