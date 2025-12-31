
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-neutral-50/70 dark:bg-neutral-950 border-t border-neutral-100/70 dark:border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">Hablemos de tu Reto.</h2>
            <p className="text-lg text-neutral-500 mb-12">
              Agenda una sesión estratégica para diagnosticar las oportunidades de IA en tu operación actual.
            </p>
            
            <div className="space-y-8">

              {/*
              <div className="flex items-center space-x-6">
                <i className="fas fa-envelope text-neutral-400"></i>
                <a className="font-medium hover:text-brand-600 transition-colors" href="mailto:main@eigencore.org">
                  main@eigencore.org 
                </a>
              </div>
              
              
              <div className="flex items-center space-x-6">
                <i className="fab fa-whatsapp text-neutral-400"></i>
                <a
                  className="font-medium hover:text-brand-600 transition-colors"
                  href="https://wa.me/5214929420950?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Eigen%20Core."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +52 (492) 942 0950
                </a>

              </div>
              */}

              <div className="flex items-center space-x-6">
                <i className="fas fa-map-marker-alt text-neutral-400"></i>
                <span className="font-medium">CDMX | Zacatecas</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white/90 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 rounded-2xl p-8 shadow-[0_24px_60px_-50px_rgba(15,23,42,0.35)]">
              <h3 className="text-2xl font-bold mb-4">Agenda una llamada estratégica</h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-8">
                Revisa tu operación con un especialista y recibe un plan de acción claro en 30 minutos.
              </p>
              <a
                href="https://cal.com/maximiliano-galindo-z62vs0/meet-eigencore"
                className="inline-flex items-center justify-center w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-lg transition-all hover:opacity-90 active:scale-95"
              >
                Agendar llamada
              </a>
              <p className="mt-4 text-xs text-neutral-400">
                Respuesta en menos de 24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
