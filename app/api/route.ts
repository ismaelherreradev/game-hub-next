import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 60;

export async function GET() {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}}`);

  const games = await res.json();

  return NextResponse.json({ games });
}
