import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Mesaj gerekli" },
        { status: 400 }
      );
    }

    const response = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      system:
        "Sen bir seyahat asistanısın. Kullanıcılara seyahat destinasyonları, tatil planlaması, ulaşım, konaklama ve seyahat ipuçları hakkında yardımcı oluyorsun. Türkçe olarak kısa ve bilgilendirici cevaplar ver.",
      messages: [{ role: "user", content: message }],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    return NextResponse.json({ reply: textBlock?.text ?? "" });
  } catch (error) {
    console.error("Claude API hatası:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu" },
      { status: 500 }
    );
  }
}
