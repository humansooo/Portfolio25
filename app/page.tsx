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
      <main className="mx-auto lg:max-w-[640px] overflow-x-hidden z-10 px-8">
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
  )
}
