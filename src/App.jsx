import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import AmbientBackground from './components/AmbientBackground.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import ResearchSection from './sections/ResearchSection.jsx';
import EducationSection from './sections/EducationSection.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import PublicationsSection from './sections/PublicationsSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import AwardsSection from './sections/AwardsSection.jsx';
import TeachingSection from './sections/TeachingSection.jsx';
import LeadershipSection from './sections/LeadershipSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import AdventureSection from './sections/AdventureSection.jsx';
import ContactSection from './sections/ContactSection.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-void text-ink">
      <AmbientBackground />
      <Navigation />
      <main className="relative z-10 lg:pl-72">
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <EducationSection />
        <ExperienceSection />
        <PublicationsSection />
        <ProjectsSection />
        <AwardsSection />
        <TeachingSection />
        <LeadershipSection />
        <SkillsSection />
        <AdventureSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
