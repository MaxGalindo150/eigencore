import React from 'react';

const TrustedBy: React.FC = () => {
  const partners = [
    {
      name: 'Cashea',
      logoLight: 'https://i.postimg.cc/k2gvYy1L/Cashea-logo.png',      // para fondo claro
      logoDark:  'https://i.postimg.cc/xN1kR657/Cashea-logo-light.png',          // para fondo oscuro (versión clara)
      href: '#impacto',
    },
    {
      name: 'Graffo',
      logoLight: 'https://i.postimg.cc/TK3JNcN8/graffo.png',
      logoDark:  'https://i.postimg.cc/V0kSRKg2/graffo.png',
      href: '#impacto',
    },
    {
      name: 'OXYMEDICA Allende',
      logoLight: 'https://i.postimg.cc/jD3QpJmZ/oxymedica.png',
      logoDark:  'https://i.postimg.cc/RJZ3Rgdk/oxymedica-logo-light.png',
      href: '#impacto',
    },
  ];

  return (
    <section className="py-16 bg-white/70 dark:bg-neutral-950/60 backdrop-blur">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <p className="text-neutral-400 dark:text-neutral-300 text-xs font-bold uppercase tracking-[0.2em] mb-10 text-center">
            Respaldados por equipos industriales y fintech de alto impacto
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.href}
                className="flex items-center justify-center h-10 sm:h-12 md:h-14 lg:h-16 opacity-80 hover:opacity-100 transition-opacity duration-300"
                aria-label={`Ver caso de éxito: ${partner.name}`}
              >
                {/* Light mode */}
                <img
                  src={partner.logoLight}
                  alt={`${partner.name} logo`}
                  className="h-full w-auto max-w-[160px] object-contain dark:hidden"
                  loading="lazy"
                  decoding="async"
                />

                {/* Dark mode */}
                <img
                  src={partner.logoDark}
                  alt={`${partner.name} logo (dark)`}
                  className="h-full w-auto max-w-[160px] object-contain hidden dark:block"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
