import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 60;

export async function GET() {
  const res = await fetch('https://api.rawg.io/api/games?key=065a1653038042558b1708e972428a26');

  const games = await res.json();

  return NextResponse.json({ games });
}
