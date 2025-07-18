import { experiences } from "@/constants/data";
import { Dot } from "lucide-react";
import { FadeInWhenVisible } from "./animate";
import ExpLinkTitle from "./ui/exp-link-title";

export default function ExperienceSection() {
  return (
    <section className="">
      <FadeInWhenVisible className="w-full">
        <h2 className="mb-16 font-bytesized text-2xl font-light text-foreground gloom">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex ">
              <div className="w-full">
                <h3 className="mb-3 w-full flex items-center justify-between text-base font-bold text-foreground/80 ">
                  <ExpLinkTitle title={exp.title} link={exp.link} />
                  <p className="text-xs text-right text-foreground/90 font-geist-mono">
                    {exp.year}
                  </p>
                </h3>
                <p className="mb-1 text-sm font-semibold text-foreground/80">
                  {exp.company}
                </p>
                <div className="text-sm text-foreground/80 leading-relaxed prose prose-invert">
                  {/* Render HTML safely */}
                  {exp.description.includes("<") ? (
                    <div
                      className="prose prose-invert prose-ul:list-disc prose-ul:pl-5"
                      dangerouslySetInnerHTML={{
                        __html: exp.description
                          .replace(/<br\s*\/?>/g, "<br />")
                          .replace(/<ul>/g, "<ul class='list-disc pl-5'>")
                          .replace(/<\/ul>/g, "</ul>")
                          .replace(/<li>/g, "<li class='mb-1'>")
                          .replace(/<\/li>/g, "</li>")
                          .replace(/<b>/g, "<b class='font-bold'>")
                          .replace(/<\/b>/g, "</b>"),
                      }}
                    />
                  ) : (
                    <span>{exp.description}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
