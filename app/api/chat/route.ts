export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { geminiModel } from "@/app/lib/gemini";

export async function POST(req: Request) {
  try {
    const { message, context } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const prompt = `
You are an AI assistant embedded in a professional developer portfolio.

Context:
${context || "General portfolio assistant"}

User question:
${message}

Respond clearly, professionally, and concisely.
Focus on technical clarity and real-world impact.
`;

    const result = await geminiModel.generateContent(prompt);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error: any) {
    console.error("Gemini API Error:", error);

    return NextResponse.json(
      { error: error.message || "Failed to generate response" },
      { status: 500 },
    );
  }
}
