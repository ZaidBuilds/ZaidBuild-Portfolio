import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // DATA_CENTRIC_LOGIC: 
    // This is where you would integrate Resend, NodeMailer, or your CRM.
    // For now, we simulate a 'proper' backend response.
    console.log("Inbound System Sync:", { name, email, message });

    // Simulate small delay for high-end feel
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ 
      status: "SYNC_COMPLETE", 
      message: "Neural connection established. I'll be in touch soon." 
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ 
      status: "SYNC_FAILED", 
      message: "System interrupt detected." 
    }, { status: 500 });
  }
}
