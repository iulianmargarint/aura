import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { text, target = 'en' } = await req.json();
  if (!text) return NextResponse.json({ error: 'Missing text' }, { status: 400 });
  // stub translation
  return NextResponse.json({ translated: `[${target}] ` + text });
}
