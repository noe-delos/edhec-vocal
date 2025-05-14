// app/api/get-signed-url/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Récupérer le type d'entretien de la requête
    const data = await request.json();
    const { interviewType } = data;

    // Sélectionner l'agent ID approprié en fonction du type d'entretien
    const agentId =
      interviewType === "corporate"
        ? process.env.NEXT_PUBLIC_CORPORATE_AGENT_ID
        : process.env.NEXT_PUBLIC_MARKET_AGENT_ID;

    // Clé API ElevenLabs depuis les variables d'environnement
    const apiKey = process.env.ELEVENLABS_API_KEY;

    if (!apiKey) {
      // Utilisation directe sans authentification si aucune clé API n'est fournie
      return NextResponse.json({
        directUse: true,
        agentId,
      });
    }

    // Obtenir l'URL signée depuis ElevenLabs
    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`,
      {
        headers: {
          "xi-api-key": apiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to get signed URL");
    }

    const responseData = await response.json();
    return NextResponse.json({
      signedUrl: responseData.signed_url,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to generate signed URL" },
      { status: 500 }
    );
  }
}
