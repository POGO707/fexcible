import { GoogleGenAI, Type } from "@google/genai";
import { AiStrategyResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingStrategy = async (
  businessName: string,
  businessType: string,
  goal: string
): Promise<AiStrategyResponse> => {
  
  const systemInstruction = `You are a senior digital marketing strategist at "Flexible", a top agency in Kolkata. 
  Your job is to provide a brief, high-impact marketing strategy for a potential client.
  Focus on Website Design, Social Media, and Video content.
  Keep it professional, encouraging, and specific to the Kolkata market if applicable.`;

  const prompt = `
    Business Name: ${businessName}
    Business Type: ${businessType}
    Main Goal: ${goal}

    Create a 3-step digital marketing plan for this business using Flexible's services.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            summary: { type: Type.STRING },
            steps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  step: { type: Type.STRING },
                  description: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AiStrategyResponse;
    }
    throw new Error("No response text");
  } catch (error) {
    console.error("Error generating strategy:", error);
    throw error;
  }
};
