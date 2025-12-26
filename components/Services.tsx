
import React from 'react';

const Services: React.FC = () => {
  const pillars = [
    {
      id: '01',
      title: 'IA Industrial & Mantenimiento Predictivo',
      description: 'Reducción de paros no planificados y optimización de costos operativos en industrias intensivas en activos.',
      features: [
        'Predicción de fallas en equipos críticos',
        'Análisis de confiabilidad y riesgo',
        'Optimización de planes de mantenimiento'
      ],
      icon: 'fa-industry'
    },
    {
      id: '02',
      title: 'Agentes Autónomos & Automatización',
      description: 'Diseñamos agentes inteligentes que operan de forma autónoma en canales reales (WhatsApp, Web, ERP).',
      features: [
        'Customer Support Automatizado',
        'Integración con CRM / ERP',
        'Eliminación de tareas manuales'
      ],
      icon: 'fa-robot'
    },
    {
      id: '03',
      title: 'Modelos Predictivos & de Riesgo',
      description: 'Sistemas que ayudan a anticipar eventos críticos y tomar mejores decisiones basadas en datos.',
      features: [
        'Scoring y modelos de riesgo',
        'Predicción de demanda operativa',
        'Optimización basada en históricos'
      ],
      icon: 'fa-shield-halved'
    }
  ];

  return (
    <section id="servicios" className="py-24 border-t border-neutral-100/70 dark:border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Qué hacemos</h2>
            <h3 className="text-4xl font-bold mb-8">IA en producción con impacto medible.</h3>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
              Partimos del dolor operativo, no de la tecnología. Diseñamos soluciones pragmáticas, robustas y explicables.
            </p>
            <div className="h-px w-20 bg-neutral-200 dark:bg-neutral-800"></div>
          </div>

          <div className="lg:col-span-8 space-y-px bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-100 dark:border-neutral-900 overflow-hidden rounded-3xl shadow-[0_30px_80px_-60px_rgba(15,23,42,0.4)]">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white/90 dark:bg-neutral-950 p-10 group hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-all">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl font-black text-neutral-100 dark:text-neutral-900 group-hover:text-brand-600/20 transition-colors">{pillar.id}</span>
                    <i className={`fas ${pillar.icon} text-xl text-neutral-300 dark:text-neutral-700 group-hover:text-brand-600`}></i>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold mb-4">{pillar.title}</h4>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-xl">
                  {pillar.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {pillar.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-brand-600 rounded-full"></div>
                      <span className="text-xs font-bold uppercase tracking-tight text-neutral-600 dark:text-neutral-400">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
