/* eslint-disable @typescript-eslint/no-explicit-any */

// app/api/get-transcript/route.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { conversationId, interviewType } = await request.json();

    if (!conversationId) {
      return NextResponse.json(
        { error: "Conversation ID is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "ElevenLabs API key not configured" },
        { status: 500 }
      );
    }

    // Fetch conversation details from ElevenLabs API
    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversations/${conversationId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`ElevenLabs API error: ${errorText}`);
      return NextResponse.json(
        { error: `Failed to fetch transcript: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Return the conversation data including transcript and metadata
    return NextResponse.json({
      success: true,
      interviewType,
      conversationData: data,
    });
  } catch (error: any) {
    console.error("Error processing transcript request:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process request" },
      { status: 500 }
    );
  }
}
