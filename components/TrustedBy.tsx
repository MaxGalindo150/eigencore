
import React from 'react';

const TrustedBy: React.FC = () => {
  const partners = ['Cashea', 'FintechMX', 'AgroTec', 'LogiMex', 'Cemex', 'Bimbo'];

  return (
    <section className="py-16 bg-white/80 dark:bg-neutral-950/60">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <p className="text-neutral-400 dark:text-neutral-600 text-xs font-bold uppercase tracking-[0.2em] mb-10">
            Respaldados por equipos industriales y fintech de alto impacto
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <span key={index} className="px-5 py-2 rounded-full border border-neutral-200/70 dark:border-neutral-800/70 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 bg-white/70 dark:bg-neutral-900/70">
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
