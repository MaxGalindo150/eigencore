
import React, { useState } from 'react';
import { askAIConsultant } from '../services/geminiService';

const AIConsultantDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [leadStatus, setLeadStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const sendDemoLead = async (payload: {
    name: string;
    company: string;
    email: string;
    question: string;
    answer: string;
  }) => {
    const formData = new FormData();
    formData.append('Nombre', payload.name || 'No proporcionado');
    formData.append('Empresa', payload.company || 'No proporcionado');
    formData.append('Email', payload.email || 'No proporcionado');
    formData.append('Pregunta', payload.question);
    formData.append('Respuesta', payload.answer);
    formData.append('_subject', 'Nuevo lead desde Demo EigenCore');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      await fetch('https://formsubmit.co/maximilianogalindo7@gmail.com', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      return true;
    } catch (error) {
      console.error('Error sending demo lead:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setLeadStatus('sending');
    setResponse(null);
    const result = await askAIConsultant(input);
    const safeResult = result || '';
    setResponse(safeResult);
    const sent = await sendDemoLead({
      name,
      company,
      email,
      question: input,
      answer: safeResult,
    });
    setLeadStatus(sent ? 'sent' : 'error');
    setIsLoading(false);
  };

  return (
    <section id="ia-demo" className="py-24 bg-white/80 dark:bg-neutral-950/40 border-y border-neutral-100/70 dark:border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Demo del Consultor EigenCore</h2>
            <p className="text-neutral-500">Cuéntanos tu reto y recibe una recomendación accionable en segundos.</p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-start">
            <form onSubmit={handleSubmit} className="bg-white/90 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 rounded-2xl p-6 shadow-[0_24px_60px_-50px_rgba(15,23,42,0.35)] space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">Formulario de demo</p>
                {leadStatus === 'sent' && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Enviado</span>
                )}
                {leadStatus === 'error' && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-rose-500">Reintentar</span>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nombre"
                  className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg py-3 px-4 text-sm outline-none focus:border-brand-500 transition-all"
                />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Empresa"
                  className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg py-3 px-4 text-sm outline-none focus:border-brand-500 transition-all"
                />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email corporativo"
                className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg py-3 px-4 text-sm outline-none focus:border-brand-500 transition-all"
              />
              <textarea
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ej: ¿Cómo optimizar logística en el Bajío?"
                className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg py-3 px-4 text-sm outline-none focus:border-brand-500 transition-all resize-none"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-lg text-sm font-bold disabled:opacity-50"
              >
                {isLoading ? 'Procesando...' : 'Enviar consulta'}
              </button>
              <p className="text-[11px] text-neutral-400">
                Tu consulta se envía automáticamente a nuestro equipo.
              </p>
            </form>

            <div className="bg-white/90 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-[0_24px_60px_-50px_rgba(15,23,42,0.35)]">
              <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-brand-600"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Consultor EigenCore</span>
              </div>
              
              <div className="p-6 min-h-[220px]">
                {isLoading ? (
                  <div className="flex items-center space-x-2 text-neutral-400">
                    <i className="fas fa-circle-notch animate-spin"></i>
                    <span className="text-sm italic">Procesando consulta estratégica...</span>
                  </div>
                ) : response ? (
                  <div className="animate-in fade-in duration-700 space-y-4">
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">"{response}"</p>
                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-400">
                      Respuesta generada con información pública y experiencia operativa.
                    </div>
                  </div>
                ) : (
                  <p className="text-neutral-400 text-sm italic">Esperando tu consulta...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultantDemo;
