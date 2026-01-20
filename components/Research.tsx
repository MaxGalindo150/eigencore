import React from 'react';

const Research: React.FC = () => {
  return (
    <section id="investigacion" className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-600 mb-4">Investigación</p>
            <h2 className="text-5xl font-bold mb-6">Research: Tlama (124M)</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Presentamos una implementación optimizada de LLaMa3 (124M) desarrollada por EigenCore. El objetivo es
              reducir tiempo de cómputo y recursos sin sacrificar rendimiento, habilitando modelos pequeños y eficientes
              que puedan entrenarse en infraestructura accesible.
            </p>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800 rounded-[2.5rem] p-10 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.4)]">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Resumen Técnico</p>
            <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
              <li><span className="font-semibold text-neutral-900 dark:text-neutral-100">Dataset:</span> edu_fineweb10B (10B tokens), curado para contenido educativo y razonamiento.</li>
              <li><span className="font-semibold text-neutral-900 dark:text-neutral-100">Arquitectura:</span> 12 capas, dmodel 768, 12 heads, contexto 1024, batch 64.</li>
              <li><span className="font-semibold text-neutral-900 dark:text-neutral-100">Entrenamiento:</span> LR 6e-4 con warmup + cosine decay, AdamW (weight decay 0.1).</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-[0_24px_60px_-50px_rgba(15,23,42,0.5)]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3">Eficiencia</p>
            <p className="text-xl font-semibold mb-2">Menos costo, mismo nivel</p>
            <p className="text-sm text-neutral-400">
              Optimizaciones en arquitectura y entrenamiento para acelerar inferencia y reducir recursos computacionales.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 shadow-[0_24px_60px_-50px_rgba(15,23,42,0.35)]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3">Escalabilidad</p>
            <p className="text-xl font-semibold mb-2">De cluster a 1 GPU</p>
            <p className="text-sm text-neutral-500">
              Entrenamiento en 8x A100 (80GB) o en una sola GPU de 8GB con gradient accumulation.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-100/80 dark:bg-neutral-900/70 border border-neutral-200/70 dark:border-neutral-800 shadow-[0_24px_60px_-50px_rgba(15,23,42,0.35)]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3">Base Científica</p>
            <p className="text-xl font-semibold mb-2">Modelo abierto a iterar</p>
            <p className="text-sm text-neutral-500">
              Primer paso hacia AGI responsable, con foco en confiabilidad, uso ético y menor impacto ambiental.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
