
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            <span>IA en Producción • Impacto Real</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
            IA aplicada a <br />
            <span className="text-neutral-300 dark:text-neutral-700">resultados, </span>
            no a demos.
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl leading-relaxed">
            No vendemos hype. Entregamos sistemas autónomos que trabajan solos, optimizando las operaciones de las empresas más grandes de México.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#contacto" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-sm transition-all hover:bg-blue-700 active:scale-95 shadow-xl shadow-blue-500/10">
              Inicia tu Transformación
            </a>
            <div className="flex items-center space-x-4 opacity-50">
               <span className="text-xs font-bold uppercase tracking-widest">Sistemas críticos en:</span>
               <div className="flex space-x-4 grayscale">
                  <span className="text-sm font-black italic">CASHEA</span>
                  <span className="text-sm font-black">CEMEX</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Minimal Element */}
      <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] border border-neutral-100 dark:border-neutral-900 rounded-full -z-10 opacity-50"></div>
    </section>
  );
};

export default Hero;
