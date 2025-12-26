
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-200/70 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/60 text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-10 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>IA en producción • Impacto real</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1] mb-8 text-neutral-900 dark:text-white">
              IA aplicada a
              <span className="block text-gradient">resultados reales</span>
              con impacto medible.
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 mb-10 max-w-2xl leading-relaxed">
              Diseñamos sistemas autónomos que reducen costos y elevan la productividad desde el primer mes. Enfocados en operación crítica y KPIs de negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="#contacto" className="w-full sm:w-auto px-10 py-5 bg-brand-600 text-white rounded-full font-black uppercase tracking-widest text-sm transition-all hover:bg-brand-700 active:scale-95 shadow-xl shadow-brand-600/20">
                Inicia tu Diagnóstico
              </a>
              <div className="flex items-center space-x-4 text-neutral-400 dark:text-neutral-500">
                 <span className="text-[11px] font-bold uppercase tracking-widest">Operación crítica en:</span>
                 <div className="flex space-x-4 text-neutral-500 dark:text-neutral-400">
                    <span className="text-sm font-black italic">CASHEA</span>
                    <span className="text-sm font-black">CEMEX</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-neutral-950/70 border border-neutral-200/70 dark:border-neutral-800/70 rounded-[2rem] p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.55)] backdrop-blur">
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">Entrega en 10-21 días</p>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Listo para producción</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Lo que recibes</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-50 dark:bg-neutral-900 flex items-center justify-center">
                  <i className="fas fa-compass text-brand-600 text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold">Diagnóstico operativo</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Mapa claro de procesos, costos y cuellos de botella.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-50 dark:bg-neutral-900 flex items-center justify-center">
                  <i className="fas fa-gears text-brand-600 text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold">Prototipo funcional</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Flujos integrados con datos reales y KPIs visibles.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-50 dark:bg-neutral-900 flex items-center justify-center">
                  <i className="fas fa-chart-line text-brand-600 text-sm"></i>
                </div>
                <div>
                  <p className="font-semibold">ROI medible</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Escenario de ahorro y plan de despliegue.</p>
                </div>
              </div>
            </div>
            <a href="https://cal.com/maximiliano-galindo-z62vs0/meet-eigencore" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors">
              Agenda una demo
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] border border-neutral-100/70 dark:border-neutral-900 rounded-full -z-10 opacity-50"></div>
    </section>
  );
};

export default Hero;
