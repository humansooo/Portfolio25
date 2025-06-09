import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import ExperienceSection from '@/components/experience-section'
import Navbar from '@/components/navbar'
import ProjectsSection from '@/components/projects-section'
import SkillsSection from '@/components/skills-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto lg:max-w-[50%] px-8">
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
