import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationJourneySection } from './components/EducationJourneySection';
import { CertificatesSection } from './components/CertificatesSection';
import { CvSection } from './components/CvSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationJourneySection />
        <CertificatesSection />
        <CvSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
