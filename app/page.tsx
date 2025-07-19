import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import ExperienceSection from '@/components/experience-section'
import Navbar from '@/components/navbar'
import ProjectsSection from '@/components/projects-section'
import SkillsSection from '@/components/skills-section'
import GrainAnimation from '@/components/grain-animation'
import { EasterEgg } from '@/components/animations'
import ProgressiveBlur from '@/components/progressive-blur'

export default async function Home() {
  return (
    <div className="bg-background min-h-screen min-w-screen overflow-hidden">
      <GrainAnimation />
      <Navbar />
      <main className="z-10 mx-auto space-y-24 px-8 pt-[40vh] pb-[20vh] lg:max-w-[640px]">
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
      <ProgressiveBlur className="fixed inset-x-0 -bottom-10 z-20 h-[30%]" />
      <ProgressiveBlur className="fixed inset-x-0 -top-10 z-20 h-[20%] rotate-0" />
    </div>
  )
}
