
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, theme, toggleTheme }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-900 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-sm flex items-center justify-center">
            <span className="text-white dark:text-black font-black text-xs">E</span>
          </div>
          <span className="text-xl font-bold tracking-tighter">Eigen<span className="text-brand-600">Core</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10">
          <a href="#servicios" className="text-xs font-bold uppercase tracking-widest hover:text-brand-600 transition-colors">Servicios</a>
          <a href="#proyectos" className="text-xs font-bold uppercase tracking-widest hover:text-brand-600 transition-colors">Impacto</a>
          <a href="#ia-demo" className="text-xs font-bold uppercase tracking-widest hover:text-brand-600 transition-colors">Demo</a>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun text-yellow-500' : 'fa-moon text-brand-600'}`}></i>
          </button>

          <a href="https://cal.com/maximiliano-galindo-z62vs0/meet-eigencore?overlayCalendar=true" className="px-6 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-sm shadow-neutral-900/20">
            Agendar Llamada
          </a>
        </div>

        <button className="md:hidden">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
