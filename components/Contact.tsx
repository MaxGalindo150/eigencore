
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
              <div className="flex items-center space-x-6">
                <i className="fas fa-envelope text-neutral-400"></i>
                <a className="font-medium hover:text-brand-600 transition-colors" href="mailto:maximilianogalindo7@gmail.com">
                  maximilianogalindo7@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-6">
                <i className="fab fa-whatsapp text-neutral-400"></i>
                <a className="font-medium hover:text-brand-600 transition-colors" href="https://wa.me/524925833789">
                  +52 492 583 3789
                </a>
              </div>
              <div className="flex items-center space-x-6">
                <i className="fas fa-map-marker-alt text-neutral-400"></i>
                <span className="font-medium">CDMX | Monterrey | Zac</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg py-4 px-6 text-sm outline-none focus:border-brand-600 transition-all" placeholder="Nombre" />
                <input type="email" className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg py-4 px-6 text-sm outline-none focus:border-brand-600 transition-all" placeholder="Email Corporativo" />
              </div>
              <input type="text" className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg py-4 px-6 text-sm outline-none focus:border-brand-600 transition-all" placeholder="Industria" />
              <textarea rows={4} className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg py-4 px-6 text-sm outline-none focus:border-brand-600 transition-all resize-none" placeholder="Describe brevemente tu objetivo..."></textarea>
              
              <button className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-lg transition-all hover:opacity-90 active:scale-95">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
