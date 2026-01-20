
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import AIConsultantDemo from './components/AIConsultantDemo';
import Research from './components/Research';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Theme sync
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <div className="relative min-h-screen bg-transparent transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20"></div>
        <div className="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-brand-100/80 to-transparent blur-3xl dark:from-brand-900/30"></div>
        <div className="absolute -bottom-48 left-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-neutral-100/80 to-transparent blur-3xl dark:from-neutral-900/40"></div>
      </div>
      <div className="relative z-10">
        <Navbar isScrolled={isScrolled} theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <TrustedBy />
          <Services />
          <Research />
          {/* <AIConsultantDemo /> */}
          <Portfolio />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
