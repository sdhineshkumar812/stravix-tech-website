import { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Process } from './components/Process';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact, type ContactHandle } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const contactRef = useRef<ContactHandle>(null);

  const handleStartProject = () => {
    contactRef.current?.focusForm();
  };

  const handleExploreWork = () => {
    const el = document.querySelector('#work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (serviceTitle: string) => {
    contactRef.current?.setService(serviceTitle);
  };

  const handleSelectPackage = (packageName: string, startingBudget: string) => {
    contactRef.current?.setBudget(`${startingBudget} (${packageName})`);
    contactRef.current?.focusForm();
  };

  const handleDiscussConcept = (conceptTitle: string) => {
    contactRef.current?.setService(`Similar to: ${conceptTitle}`);
    contactRef.current?.focusForm();
  };

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Responsive Header */}
      <Navbar onOpenContact={handleStartProject} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero */}
        <Hero onStartProject={handleStartProject} onExploreWork={handleExploreWork} />

        {/* 2. Services */}
        <Services onSelectService={handleSelectService} />

        {/* 3. Selected Work */}
        <Work onStartProjectForConcept={handleDiscussConcept} />

        {/* 4. Process */}
        <Process />

        {/* 5. About */}
        <About />

        {/* 6. Pricing Packages */}
        <Pricing onSelectPackage={handleSelectPackage} />

        {/* 7. FAQ */}
        <FAQ />

        {/* 8. Contact with Validated Form & EmailJS */}
        <Contact ref={contactRef} />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}

export default App;
