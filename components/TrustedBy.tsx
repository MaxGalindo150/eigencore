
import React from 'react';

const TrustedBy: React.FC = () => {
  const partners = ['Cashea', 'FintechMX', 'AgroTec', 'LogiMex', 'Cemex', 'Bimbo'];

  return (
    <section className="py-16 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <p className="text-neutral-400 dark:text-neutral-600 text-xs font-bold uppercase tracking-[0.2em] mb-12">
            Colaborando con líderes industriales y startups de alto impacto
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {partners.map((partner, index) => (
              <span key={index} className="text-xl font-bold tracking-tighter text-neutral-900 dark:text-white uppercase">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
