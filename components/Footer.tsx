
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black dark:bg-white rounded-sm flex items-center justify-center">
            <span className="text-white dark:text-black font-black text-[10px]">E</span>
          </div>
          <span className="text-lg font-bold tracking-tighter">EigenCore</span>
        </div>
        
        <div className="flex space-x-8 text-neutral-400 dark:text-neutral-600 text-[10px] font-black uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Github</a>
        </div>
        
        <div className="text-neutral-400 dark:text-neutral-600 text-[10px] font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} EigenCore México • IA Real
        </div>
      </div>
    </footer>
  );
};

export default Footer;
