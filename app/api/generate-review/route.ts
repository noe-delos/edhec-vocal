/* eslint-disable @typescript-eslint/no-explicit-any */

// app/api/generate-review/route.ts

import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { transcript, interviewType } = await request.json();

    if (!transcript) {
      return NextResponse.json(
        { error: "Transcript is required" },
        { status: 400 }
      );
    }

    // Format transcript for better readability in the prompt
    const formattedTranscript = transcript
      .map((entry: any) => {
        const speaker = entry.role === "agent" ? "Interviewer" : "Candidate";
        return `${speaker}: ${entry.message}`;
      })
      .join("\n\n");

    // Create the prompt based on interview type
    const interviewContext =
      interviewType === "corporate"
        ? "Finance d'Entreprise (Corporate Finance)"
        : "Sales & Trading (Finance de marché)";

    const prompt = `
      Tu es un expert en recrutement spécialisé dans le domaine de la finance, avec une expérience particulière dans les entretiens de ${interviewContext}.
      
      Voici la transcription d'un entretien simulé entre un candidat et un recruteur pour un poste en ${interviewContext}.
      
      Transcription:
      ${formattedTranscript}
      
      Merci d'analyser cet entretien et de fournir:
      
      1. Une note globale sur 10 (un nombre entier entre 0 et 10)
      2. Un résumé synthétique de l'entretien (environ 150 mots)
      3. Une analyse détaillée des points forts du candidat
      4. Une analyse détaillée des points à améliorer
      5. Des conseils pratiques et personnalisés pour que le candidat puisse s'améliorer
      
      Présente ta réponse au format JSON avec les champs suivants:
      {
        "score": <note sur 10>,
        "summary": "<résumé synthétique>",
        "strengths": ["<point fort 1>", "<point fort 2>", ...],
        "weaknesses": ["<point à améliorer 1>", "<point à améliorer 2>", ...],
        "advice": ["<conseil 1>", "<conseil 2>", ...],
        "detailedAnalysis": "<analyse détaillée au format markdown>"
      }
    `;

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content:
            "Tu es un expert en recrutement spécialisé dans les entretiens de finance. Tu fournis des analyses pertinentes, constructives et détaillées.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" },
    });

    // Parse the JSON response
    const resultText = response.choices[0].message.content;

    if (!resultText) {
      throw new Error("Empty response from OpenAI");
    }

    const result = JSON.parse(resultText);

    // Return the review data
    return NextResponse.json({
      success: true,
      review: result,
    });
  } catch (error: any) {
    console.error("Error generating review:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to generate review",
        success: false,
      },
      { status: 500 }
    );
  }
}
