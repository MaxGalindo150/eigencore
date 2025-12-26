
import React, { useState } from 'react';
import { askAIConsultant } from '../services/geminiService';

const AIConsultantDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setResponse(null);
    const result = await askAIConsultant(input);
    setResponse(result || "");
    setIsLoading(false);
  };

  return (
    <section id="ia-demo" className="py-24 bg-neutral-50 dark:bg-neutral-950/40 border-y border-neutral-100 dark:border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Prueba Nuestra Visión</h2>
            <p className="text-neutral-500">Haz una pregunta técnica o de negocio sobre IA en tu industria.</p>
          </div>

          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Consultor Métrica IA</span>
            </div>
            
            <div className="p-6 min-h-[120px]">
              {isLoading ? (
                <div className="flex items-center space-x-2 text-neutral-400">
                  <i className="fas fa-circle-notch animate-spin"></i>
                  <span className="text-sm italic">Procesando consulta estratégica...</span>
                </div>
              ) : response ? (
                <div className="animate-in fade-in duration-700">
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">"{response}"</p>
                </div>
              ) : (
                <p className="text-neutral-400 text-sm italic">Esperando tu consulta...</p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 bg-neutral-50 dark:bg-neutral-950 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ej: ¿Cómo optimizar logística en el Bajío?"
                className="flex-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg py-3 px-4 text-sm outline-none focus:border-blue-500 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-2 rounded-lg text-sm font-bold disabled:opacity-50"
              >
                Preguntar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultantDemo;
