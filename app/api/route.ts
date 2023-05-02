import { NextResponse } from 'next/server';

import type { Games } from '@/types';

export const revalidate = 60;

export async function GET() {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY ?? '065a1653038042558b1708e972428a26'}`
  );

  const games = (await res.json()) as Games;

  return NextResponse.json({ games });
}
