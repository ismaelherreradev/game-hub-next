import { NextResponse } from 'next/server';

import type { Games } from '@/types/games';

export const runtime = 'edge';
export const revalidate = 60;

export async function GET() {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`);

  const games = (await res.json()) as Games;

  return NextResponse.json({ games });
}
