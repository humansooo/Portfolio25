import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import GrainAnimation from "@/components/grain-animation";
import { EasterEgg } from "@/components/animations";

export default async function Home() {
  return (
    <div className="relative min-h-screen min-w-screen bg-background overflow-hidden">
      <GrainAnimation />
      <Navbar />
      <main className="mx-auto space-y-24 pt-[40vh] pb-[20vh] lg:max-w-[640px] z-10 px-8">
        <div id="about">
          <AboutSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
