import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import EducationSection from '@/components/education-section'
import ExperienceSection from '@/components/experience-section'
import Navbar from '@/components/navbar'
import ProjectsSection from '@/components/projects-section'
import SkillsSection from '@/components/skills-section'
import GrainAnimation from '@/components/grain-animation'
import ProgressiveBlur from '@/components/progressive-blur'
import SiteFooter from '@/components/site-footer'

export default async function Home() {
  return (
    <div className="bg-background min-h-screen">
      <GrainAnimation />
      <Navbar />
      <main className="relative z-10 mx-auto w-full max-w-[672px] px-6 pb-[20vh] md:px-8">
        <div id="about" className="flex min-h-[92svh] items-center pt-24">
          <AboutSection />
        </div>
        <div className="space-y-28 pb-24 md:space-y-36">
          <div id="experience" className="scroll-mt-24">
            <ExperienceSection />
          </div>
          <div id="projects" className="scroll-mt-24">
            <ProjectsSection />
          </div>
          <div id="skills" className="scroll-mt-24">
            <SkillsSection />
          </div>
          <div id="education" className="scroll-mt-24">
            <EducationSection />
          </div>
          <div id="contact" className="scroll-mt-24">
            <ContactSection />
          </div>
        </div>
        <SiteFooter />
      </main>
      <ProgressiveBlur className="fixed inset-x-0 -bottom-10 z-20 h-[20%]" />
      <ProgressiveBlur className="fixed inset-x-0 -top-10 z-20 h-[20%] rotate-0" />
    </div>
  )
}
