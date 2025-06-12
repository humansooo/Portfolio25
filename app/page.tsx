import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import CustomCursor from '@/components/custom-cursor'
import ExperienceSection from '@/components/experience-section'
import Navbar from '@/components/navbar'
import ProjectsSection from '@/components/projects-section'
import SkillsSection from '@/components/skills-section'

export default async function Home() {
  return (
    <div className="min-h-screen min-w-screen outline bg-background overflow-x-hidden">
      <Navbar />
      <CustomCursor />
      <main className="mx-auto lg:max-w-[50%] overflow-x-hidden z-10 px-8">
        <div
          id="about"
          className="scroll-mt-20"
        >
          <AboutSection />
        </div>
        <div
          id="experience"
          className="scroll-mt-20"
        >
          <ExperienceSection />
        </div>
        <div
          id="projects"
          className="scroll-mt-20"
        >
          <ProjectsSection />
        </div>
        <div
          id="skills"
          className="scroll-mt-20"
        >
          <SkillsSection />
        </div>
        <div
          id="contact"
          className="scroll-mt-20"
        >
          <ContactSection />
        </div>
      </main>
    </div>
  )
}
