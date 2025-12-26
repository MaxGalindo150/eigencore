
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Caso de Éxito Real</h2>
          <h3 className="text-5xl font-bold mb-6">Cashea.app</h3>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl">
            Diseñamos y operamos el agente de IA de atención al cliente de Cashea. No es un piloto. Es un sistema crítico funcionando todos los días.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-900 p-10 border border-neutral-200 dark:border-neutral-800 rounded-3xl">
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Volumen de Atención</p>
            <p className="text-6xl font-black text-blue-600 mb-2">~50%</p>
            <p className="text-sm font-medium text-neutral-500">Del volumen total gestionado de forma autónoma.</p>
          </div>
          
          <div className="bg-white dark:bg-neutral-900 p-10 border border-neutral-200 dark:border-neutral-800 rounded-3xl">
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Satisfacción (CSAT)</p>
            <p className="text-6xl font-black text-blue-600 mb-2">87%</p>
            <p className="text-sm font-medium text-neutral-500">Nivel de satisfacción superior al promedio humano.</p>
          </div>

          <div className="bg-white dark:bg-neutral-900 p-10 border border-neutral-200 dark:border-neutral-800 rounded-3xl">
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Estado Operativo</p>
            <p className="text-6xl font-black text-green-500 mb-2">LIVE</p>
            <p className="text-sm font-medium text-neutral-500">Operación continua sin intervención manual.</p>
          </div>
        </div>

        <div className="mt-16 p-12 bg-neutral-900 rounded-[2.5rem] text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <p className="text-lg italic mb-8">
                "EigenCore ha sido el aliado fundamental para escalar nuestra operación sin incrementar linealmente los costos de soporte."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center">
                   <i className="fas fa-user-tie text-neutral-500"></i>
                </div>
                <div>
                  <p className="font-bold">VP of Engineering</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">Cashea.app</p>
                </div>
              </div>
            </div>
            <a href="#contacto" className="px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all active:scale-95">
              Solicitar Audit de IA
            </a>
          </div>
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
             <i className="fas fa-brain text-[300px] -translate-y-20 translate-x-20"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
