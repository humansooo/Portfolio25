import { experiences } from "@/constants/data";
import { Dot } from "lucide-react";
import { FadeInWhenVisible } from "./animate";
import ExpLinkTitle from "./ui/exp-link-title";

export default function ExperienceSection() {
  return (
    <section className="py-24">
      <FadeInWhenVisible className="w-full">
        <h2 className="mb-16 text-center text-2xl font-light text-foreground">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex ">
              <div className="w-full">
                <h3 className="mb-3 w-full flex items-center justify-between text-base font-geist-mono font-bold text-foreground/80 ">
                  <ExpLinkTitle title={exp.title} link={exp.link} />
                  <div className="text-xs text-right font-light text-foreground/60 ">
                    {exp.year}
                  </div>
                </h3>
                <p className="mb-1 text-sm font-semibold text-foreground/80">
                  {exp.company}
                </p>
                <p className="text-sm  text-foreground/80">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
