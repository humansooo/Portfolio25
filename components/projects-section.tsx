import { projects } from "@/constants/data";
import { Link2 } from "lucide-react";
import { FadeInWhenVisible } from "./animate";
import Link from "next/link";
import { ProjectImageGallery } from "./project-image-gallery";

export default function ProjectsSection() {
  return (
    <section className="">
      <div className="w-full">
        <h2 className="mb-16 font-bytesized text-2xl font-light text-foreground gloom">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-3 md:gap-2 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeInWhenVisible
              key={index}
              className=" gap-3 md:gap-2 flex flex-col border relative border-dashed border-border p-3 md:p-2 "
            >
              <ProjectImageGallery
                images={project.image}
                projectTitle={project.title}
                aspectRatio="aspect-8/5"
              />
              <div className="">
                <h3 className="text-sm font-geist-mono font-bold flex items-center justify-between text-foreground/80">
                  {project.title}

                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-block cursor-pointer text-foreground/30 hover:bg-foreground/10 rounded-md px-1 transition-all duration-500"
                    >
                      <Link2 size={18} />
                    </Link>
                  )}
                </h3>
                <p className="text-sm font-bold text-foreground flex mt-3 gap-1 flex-wrap">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className=" rounded-md px-1.5 py-0.5 bg-muted/80 text-[10px]  text-foreground shadow-[inset_2px_2px_2px_#6664] hover:shadow-[inset_4px_4px_4px_#6664] transition-all duration-500 font-geist-mono font-light"
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
  );
}
