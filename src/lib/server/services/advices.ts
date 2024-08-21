"use server";

import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

import { advices } from "@/lib/_mocks";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateRandomAdvice = async (): Promise<string> => {
  // generate a ramdom number index using the length of advices
  try {
    const randomIndex = Math.floor(Math.random() * advices.length);
    const advice = advices[randomIndex];
    return advice;
  } catch {
    return "Ocurrió un error en al generar el consejo, intentelo más tarde.";
  }
};

export const generateRandomAIAdvice = async (): Promise<string> => {
  const model = google("models/gemini-1.5-flash");
  const { text } = await generateText({
    model: model,
    system: "Eres un desarrollador web Senior con 10 años de experiencia.",
    prompt:
      "¿Qué consejo le darías a un desarrollador web que recién empieza?. El consejo debería ser una frase de un parrafo corto maximo 120 caracteres. El formato de respuesta debe ser un texto plano.",
  });

  return text;
};
