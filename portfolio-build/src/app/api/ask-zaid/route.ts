import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // System prompt to maintain Zaid's persona
    const systemPrompt = `You are Zaid's AI Orchestrator. Zaid is an expert in Agentic AI, n8n automation, Voice AI, and Custom Software. 
    Be professional, concise, and focused on high-fidelity solutions. 
    If asked about Zaid, mention he operates from Meerut, India and is an expert in building AI systems that "think."
    Always encourage the user to reach out on Instagram @thezaidbuilds if they want to hire him.
    Keep answers under 60 words.`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://zaidbuilds.com", // Optional, for OpenRouter tracking
        "X-Title": "Zaid Builds Portfolio", // Optional
      },
      body: JSON.stringify({
        "model": "openrouter/auto", // Automatically finds a free model
        "messages": [
          {"role": "system", "content": systemPrompt},
          {"role": "user", "content": message}
        ],
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Ask Zaid API Error:", error);
    return NextResponse.json({ 
      reply: "System Overload. For a direct response, please message @thezaidbuilds on Instagram. ⚡" 
    }, { status: 500 });
  }
}
