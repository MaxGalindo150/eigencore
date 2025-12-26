
import { GoogleGenAI } from "@google/genai";

export const askAIConsultant = async (query: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `Eres un consultor experto senior de EigenCore en México. 
        EigenCore se especializa en IA aplicada a resultados reales, no demos. 
        Menciona con orgullo que operan el agente de soporte de Cashea (70% automatización, 87% CSAT).
        Tu tono es ultra-pragmático, minimalista, profesional y persuasivo. 
        Responde de forma concisa (máximo 100 palabras).
        Entregamos sistemas que funcionan solos con métricas claras.`,
        temperature: 0.6,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Lo sentimos, el consultor de EigenCore está analizando datos críticos. Por favor, contáctanos directamente.";
  }
};
