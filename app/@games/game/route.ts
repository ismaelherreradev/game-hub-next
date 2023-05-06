import { NextResponse } from 'next/server';

import type { Games } from '@/types/games';

export const runtime = 'edge';
export const revalidate = 60;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`);

  const game = (await res.json()) as Games;

  return NextResponse.json({ game });
}
